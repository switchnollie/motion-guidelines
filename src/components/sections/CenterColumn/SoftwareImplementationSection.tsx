import React from "react";
import { StyledDivider, SecondTitle, BoxWrapper, Box } from "./style";
import SelectionList from "../../SelectionList";
import useImplementationSelection from "../../../hooks/useSoftwareSelection";
import KeyframesSection from "./KeyframesSection";
import SpringSection from "./SpringSection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function SoftwareImplementationSection(props: Props) {
  const {
    selectedMode: value,
    setSelectedMode: setValue
  } = useImplementationSelection();
  const handleChange = (event: React.FormEvent, newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
      <BoxWrapper>
        <Box keyLeft />
        <Box keyRight />
        <Box main />
      </BoxWrapper>
      <SelectionList value={value} onChange={handleChange}>
        <KeyframesSection />
        <SpringSection />
      </SelectionList>
    </>
  );
}
