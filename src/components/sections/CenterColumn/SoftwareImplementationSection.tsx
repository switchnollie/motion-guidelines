import React from "react";
import { StyledDivider, SecondTitle } from "./style";
import SelectionList from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import EasingDurationsSection from "./EasingDurationsSection";
import SpringSection from "./SpringSection";
import BoxVisualization from "../../BoxVisualization";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function SoftwareImplementationSection({
  lastAnimate,
  setLastAnimate
}: Props) {
  const { selectedMode, setSelectedMode } = useImplementationSelection();
  const handleChange = (event: React.FormEvent, newValue: any) => {
    setSelectedMode(newValue);
  };
  return (
    <>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
      <BoxVisualization
        lastAnimate={lastAnimate}
        setLastAnimate={setLastAnimate}
      />
      <SelectionList value={selectedMode} onChange={handleChange}>
        <EasingDurationsSection />
        <SpringSection />
      </SelectionList>
    </>
  );
}
