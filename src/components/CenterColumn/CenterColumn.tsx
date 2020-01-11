import React from "react";
import Column from "../Column";
import { StyledTitle, StyledDivider, TopContainer } from "./style";
import Button from "../Button";

export default function CenterColumn() {
  return (
    <Column>
      <TopContainer>
        <StyledTitle>Animationsprinzipien</StyledTitle>
        <Button>Click Me!</Button>
      </TopContainer>
      <StyledDivider vertical />
    </Column>
  );
}
