import React from "react";
import Column from "../Column";
import Divider from "../Divider";
import { StyledTitle } from "./style";

export default function LeftColumn() {
  return (
    <Column highlightBackground>
      <h1>Motion Guidelines</h1>
      <StyledTitle>Kognitive Grundlagen</StyledTitle>
      <Divider horizontal inverse />
    </Column>
  );
}
