import React, { useState } from "react";
import { SelectionItem as ImplementationSelectionItem } from "../../SelectionList";
import TwoColGrid, { LeftColumn, RightColumn } from "../../TwoColGrid";
import SelectionTabs, { SelectionItem } from "../../SelectionTabs";
import { Easing } from "../../../types";

interface Props {
  selected?: boolean;
  value?: any;
  onChange?: (e: React.FormEvent, value: any) => void;
}

export default function KeyframesSection({ selected, value, onChange }: Props) {
  const [selectedEasing, setSelectedEasing] = useState(Easing.EaseOut);
  const handleChange = (event: React.FormEvent, newValue: any) => {
    setSelectedEasing(newValue);
  };
  return (
    <TwoColGrid>
      <LeftColumn>
        <ImplementationSelectionItem
          onChange={onChange}
          selected={selected}
          value={value}
          title="Keyframes"
        />
        <SelectionTabs value={selectedEasing} onChange={handleChange}>
          <SelectionItem value={Easing.EaseIn}>{Easing.EaseIn}</SelectionItem>
          <SelectionItem value={Easing.EaseOut}>{Easing.EaseOut}</SelectionItem>
          <SelectionItem value={Easing.EaseInOut}>
            {Easing.EaseInOut}
          </SelectionItem>
        </SelectionTabs>
      </LeftColumn>
      <RightColumn></RightColumn>
    </TwoColGrid>
  );
}
