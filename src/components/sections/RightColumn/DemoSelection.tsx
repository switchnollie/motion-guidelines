import React, { useState } from "react";
import { StyledTitle } from "./style";
import SelectionList, { SelectionItem } from "../../SelectionList";
import { NavSection } from "../../../types";
import useNavigationSelection from "../../../hooks/useNavigationSelection";

const selectionListItems = [
  {
    id: 0,
    title: "Material Design",
    subtitle: "Google"
  },
  {
    id: 1,
    title: "Fluent Design",
    subtitle: "Microsoft"
  }
];
export default function DemoSelection() {
  const [value, setValue] = useState<boolean | null>(null);
  const { focusedSection, setFocusedSection } = useNavigationSelection();
  const isDisabled = focusedSection !== NavSection.Demos;
  const handleChange = (event: React.FormEvent, newValue: any) => {
    isDisabled && setFocusedSection(NavSection.Demos);
    setValue(newValue);
  };
  return (
    <div style={{ marginTop: 132 }}>
      <StyledTitle hasHighlight={focusedSection === NavSection.Demos}>
        Umsetzungen
      </StyledTitle>
      <SelectionList
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      >
        {selectionListItems.map(({ id, title, subtitle }) => (
          <SelectionItem
            key={id}
            value={id}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </SelectionList>
    </div>
  );
}
