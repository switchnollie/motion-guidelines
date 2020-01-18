import React from "react";
import { SelectionItem } from "../../SelectionList";
import { SliderWrapper, StyledRangeInput, SlidersContainer } from "./style";
import theme from "../../../theme";

interface Props {
  selected?: boolean;
  value?: any;
  onChange?: (e: React.FormEvent, value: any) => void;
}

export default function SpringSection({ selected, value, onChange }: Props) {
  return (
    <>
      <SelectionItem
        style={{ marginRight: 153 }}
        onChange={onChange}
        selected={selected}
        value={value}
        title="Physikalische Modelle"
      />
      <SlidersContainer>
        <SliderWrapper>
          <label>Stiffness</label>
          <StyledRangeInput
            onChange={() => {}}
            name="stiffness"
            value={25}
            max={100}
            min={0}
            baseColor={theme.fontSecondary}
            accentColor={theme.accentColor}
          />
        </SliderWrapper>
        <SliderWrapper>
          <label>Damping</label>
          <StyledRangeInput
            onChange={() => {}}
            name="damping"
            value={25}
            max={100}
            min={0}
            baseColor={theme.fontSecondary}
            accentColor={theme.accentColor}
          />
        </SliderWrapper>
      </SlidersContainer>
    </>
  );
}
