import React from "react";
import { StyledDivider, SecondTitle } from "./style";
import SelectionList from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import EasingDurationsSection from "./EasingDurationsSection";
import SpringSection from "./SpringSection";
import BoxVisualization from "../../BoxVisualization";
import useNavigationSelection from "../../../hooks/useNavigationSelection";
import { NavSection } from "../../../types";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function SoftwareImplementationSection({
  lastAnimate,
  setLastAnimate
}: Props) {
  const { selectedMode, setSelectedMode } = useImplementationSelection();
  const { focusedSection, setFocusedSection } = useNavigationSelection();
  const isDisabled = focusedSection !== NavSection.Software;

  const handleChange = (event: React.FormEvent, newValue: any) => {
    isDisabled && setFocusedSection(NavSection.Software);
    setSelectedMode(newValue);
  };
  return (
    <>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
      <BoxVisualization />
      <SelectionList
        value={selectedMode}
        onChange={handleChange}
        disabled={isDisabled}
      >
        <EasingDurationsSection />
        <SpringSection />
      </SelectionList>
    </>
  );
}
