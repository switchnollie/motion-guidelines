import React from "react";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import { SelectionItem as ImplementationSelectionItem } from "../../SelectionList";
import TwoColGrid, { LeftColumn, RightColumn } from "../../TwoColGrid";
import SelectionTabs, { SelectionItem } from "../../SelectionTabs";
import { Easing, NavSection } from "../../../types";
import RangeInput from "../../RangeInput";
import theme from "../../../theme";
import useNavigationSelection from "../../../hooks/useNavigationSelection";

interface Props {
  selected?: boolean;
  value?: any;
  onChange?: (e: React.FormEvent, value: any) => void;
  disabled?: boolean;
}

export default function EasingDurationsSection({
  selected,
  value,
  onChange,
  disabled
}: Props) {
  const {
    selectedEasing,
    setSelectedEasing,
    duration,
    setDuration
  } = useImplementationSelection();
  const { focusedSection } = useNavigationSelection();
  const isDisabled = focusedSection !== NavSection.Software;
  const handleChange = (event: React.FormEvent, newValue: any) => {
    setSelectedEasing(newValue);
  };
  return (
    <>
      <ImplementationSelectionItem
        onChange={onChange}
        selected={selected}
        value={value}
        style={{ marginRight: 153 }}
        disabled={disabled}
        title="Easing und Dauer"
      />
      <TwoColGrid>
        <LeftColumn>
          <SelectionTabs value={selectedEasing} onChange={handleChange}>
            <SelectionItem value={Easing.EaseIn}>{Easing.EaseIn}</SelectionItem>
            <SelectionItem value={Easing.EaseOut}>
              {Easing.EaseOut}
            </SelectionItem>
            <SelectionItem value={Easing.EaseInOut}>
              {Easing.EaseInOut}
            </SelectionItem>
          </SelectionTabs>
        </LeftColumn>
        <RightColumn>
          <RangeInput
            onChange={e => {
              setDuration(parseInt(e.target.value, 10));
            }}
            name="friction"
            value={duration}
            max={1500}
            min={20}
            disabled={isDisabled}
            baseColor={theme.fontSecondary}
            accentColor={isDisabled ? "#bbbfcd" : theme.accentColor}
          />
        </RightColumn>
      </TwoColGrid>
    </>
  );
}
