import React from "react";
import { SelectionItem } from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import {
  SliderWrapper,
  StyledRangeInput,
  SlidersContainer,
  Label
} from "./style";
import theme from "../../../theme";
import { NavSection, SoftwareImplementation } from "../../../types";
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
    selectedMode,
    friction,
    setFriction
  } = useImplementationSelection();
  const isDisabledContent =
    disabled || selectedMode !== SoftwareImplementation.Spring;
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
          <Label disabled={isDisabledContent}>Tension</Label>
          <StyledRangeInput
            onChange={e => {
              setTension(parseInt(e.target.value, 10));
            }}
            name="tension"
            value={tension}
            max={500}
            min={0}
            disabled={isDisabledContent}
            baseColor={theme.fontSecondary}
            accentColor={isDisabledContent ? "#bbbfcd" : theme.accentColor}
          />
        </SliderWrapper>
        <SliderWrapper>
          <Label disabled={isDisabledContent}>Friction</Label>
          <StyledRangeInput
            onChange={e => {
              setFriction(parseInt(e.target.value, 10));
            }}
            name="friction"
            value={friction}
            max={100}
            min={0}
            disabled={isDisabledContent}
            baseColor={theme.fontSecondary}
            accentColor={isDisabledContent ? "#bbbfcd" : theme.accentColor}
          />
        </SliderWrapper>
      </SlidersContainer>
    </>
  );
}
