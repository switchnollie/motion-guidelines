import React from "react";
import Column from "../../Column";
import SmartphoneFrame from "../../SmartphoneFrame";
import DesignRules from "./DesignRules";
import DemoSelection from "./DemoSelection";

export default function RightColumn() {
  return (
    <Column>
      <DesignRules />
      <DemoSelection />
      <SmartphoneFrame>
        <iframe name="hero" src="http://127.0.0.1:8080/#/" />
      </SmartphoneFrame>
    </Column>
  );
}
