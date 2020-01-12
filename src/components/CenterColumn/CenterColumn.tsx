import React, { useState } from "react";
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

export default function CenterColumn() {
  const [lastClick, setLastClick] = useState(0);
  const { selectedMode } = usePrincipleSelection();
  const handleButtonClick = () => setLastClick(Date.now());
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
          <LineChart lastAnimate={lastClick} mode={selectedMode} />
        </VisualizerColumn>
      </SelectionGrid>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
    </Column>
  );
}
