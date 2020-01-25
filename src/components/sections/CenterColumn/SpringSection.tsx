import React from "react";
import { SelectionItem } from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import { SliderWrapper, StyledRangeInput, SlidersContainer } from "./style";
import theme from "../../../theme";
import { NavSection } from "../../../types";
import useNavigationSelection from "../../../hooks/useNavigationSelection";

interface Props {
  selected?: boolean;
  value?: any;
  onChange?: (e: React.FormEvent, value: any) => void;
  disabled?: boolean;
}

export default function SpringSection({
  selected,
  value,
  onChange,
  disabled
}: Props) {
  const {
    tension,
    setTension,
    friction,
    setFriction
  } = useImplementationSelection();
  const { focusedSection, setFocusedSection } = useNavigationSelection();
  const isDisabled = focusedSection !== NavSection.Software;
  return (
    <>
      <SelectionItem
        style={{ marginRight: 153 }}
        onChange={onChange}
        selected={selected}
        value={value}
        disabled={disabled}
        title="Physikalische Modelle"
      />
      <SlidersContainer>
        <SliderWrapper>
          <label>Tension</label>
          <StyledRangeInput
            onChange={e => {
              setTension(parseInt(e.target.value, 10));
            }}
            name="tension"
            value={tension}
            max={500}
            min={0}
            disabled={isDisabled}
            baseColor={theme.fontSecondary}
            accentColor={isDisabled ? "#bbbfcd" : theme.accentColor}
          />
        </SliderWrapper>
        <SliderWrapper>
          <label>Friction</label>
          <StyledRangeInput
            onChange={e => {
              setFriction(parseInt(e.target.value, 10));
            }}
            name="friction"
            value={friction}
            max={100}
            min={0}
            disabled={isDisabled}
            baseColor={theme.fontSecondary}
            accentColor={isDisabled ? "#bbbfcd" : theme.accentColor}
          />
        </SliderWrapper>
      </SlidersContainer>
    </>
  );
}
