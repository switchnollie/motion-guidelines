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
    tension,
    setTension,
    friction,
    setFriction
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
          <label>Tension</label>
          <StyledRangeInput
            onChange={e => {
              setTension(parseInt(e.target.value, 10));
            }}
            name="tension"
            value={tension}
            max={500}
            min={0}
            baseColor={theme.fontSecondary}
            accentColor={theme.accentColor}
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
            baseColor={theme.fontSecondary}
            accentColor={theme.accentColor}
          />
        </SliderWrapper>
      </SlidersContainer>
    </>
  );
}
