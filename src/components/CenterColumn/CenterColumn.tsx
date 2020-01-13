import React from "react";
import Column from "../Column";
import PrincipleSelection from "../PrincipleSelection";
import LineChart from "../LineChart";
import {
  FirstTitle,
  StyledDivider,
  TopContainer,
  StyledButton,
  SelectionGrid,
  VisualizerColumn,
  SelectionListColumn,
  SecondTitle
} from "./style";
import usePrincipleSelection from "../../hooks/usePrincipleSelection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn({ lastAnimate, setLastAnimate }: Props) {
  const { selectedMode } = usePrincipleSelection();
  const handleButtonClick = () => setLastAnimate(Date.now());
  return (
    <Column>
      <TopContainer>
        <FirstTitle>Animationsprinzipien</FirstTitle>
        <StyledButton onClick={handleButtonClick}>Click Me!</StyledButton>
      </TopContainer>
      <SelectionGrid>
        <SelectionListColumn>
          <PrincipleSelection />
        </SelectionListColumn>
        <VisualizerColumn>
          <LineChart lastAnimate={lastAnimate} mode={selectedMode} />
        </VisualizerColumn>
      </SelectionGrid>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
    </Column>
  );
}
