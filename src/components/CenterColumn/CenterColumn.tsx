import React from "react";
import Column from "../Column";
import PrincipleSelection from "../PrincipleSelection";
import {
  StyledTitle,
  StyledDivider,
  TopContainer,
  StyledButton,
  SelectionGrid,
  VisualizerColumn,
  SelectionListColumn
} from "./style";

export default function CenterColumn() {
  return (
    <Column>
      <TopContainer>
        <StyledTitle>Animationsprinzipien</StyledTitle>
        <StyledButton>Click Me!</StyledButton>
      </TopContainer>
      <SelectionGrid>
        <SelectionListColumn>
          <PrincipleSelection />
        </SelectionListColumn>
        <VisualizerColumn>Steht rechts</VisualizerColumn>
      </SelectionGrid>
      <StyledDivider vertical />
    </Column>
  );
}
