import React from "react";
import Column from "../../Column";
import SmartphoneFrame from "../../SmartphoneFrame";
import { StyledTitle } from "./style";

export default function RightColumn() {
  return (
    <Column>
      <StyledTitle>Umsetzungen</StyledTitle>
      <SmartphoneFrame>
        <iframe name="hero" src="http://127.0.0.1:8080/#/" />
      </SmartphoneFrame>
    </Column>
  );
}
