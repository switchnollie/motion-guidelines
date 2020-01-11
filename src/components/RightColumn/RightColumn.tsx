import React from "react";
import Column from "../Column";
import SmartphoneFrame from "../SmartphoneFrame";
import { StyledTitle, MockContent } from "./style";

export default function RightColumn() {
  return (
    <Column>
      <StyledTitle>Umsetzungen</StyledTitle>
      <SmartphoneFrame>
        <MockContent>JD's Demos</MockContent>
      </SmartphoneFrame>
    </Column>
  );
}
