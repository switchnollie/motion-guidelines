import React from "react";
import { SelectionItem } from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import { SliderWrapper, StyledRangeInput, SlidersContainer } from "./style";
import theme from "../../../theme";

interface Props {
  selected?: boolean;
  value?: any;
  onChange?: (e: React.FormEvent, value: any) => void;
}

export default function SpringSection({ selected, value, onChange }: Props) {
  const {
    stiffness,
    setStiffness,
    damping,
    setDamping
  } = useImplementationSelection();
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
            onChange={e => {
              setStiffness(parseInt(e.target.value, 10));
            }}
            name="stiffness"
            value={stiffness}
            max={100}
            min={0}
            baseColor={theme.fontSecondary}
            accentColor={theme.accentColor}
          />
        </SliderWrapper>
        <SliderWrapper>
          <label>Damping</label>
          <StyledRangeInput
            onChange={e => {
              setDamping(parseInt(e.target.value, 10));
            }}
            name="damping"
            value={damping}
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
