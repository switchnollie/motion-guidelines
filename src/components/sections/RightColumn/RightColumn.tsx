import React from "react";
import Column from "../../Column";
import SmartphoneFrame from "../../SmartphoneFrame";
import DesignRules from "./DesignRules";
import DemoSelection from "./DemoSelection";
import HsAalenLogo from "../../HsAalenLogo";
import { CopyrightText } from "./style";

export default function RightColumn() {
  return (
    <Column>
      <DesignRules />
      <DemoSelection />
      <SmartphoneFrame>
        <iframe name="hero" src="http://127.0.0.1:8080/#/" />
      </SmartphoneFrame>
      <HsAalenLogo />
      <CopyrightText>
        ©&nbsp;Tim Weise, Yannick Schiele, Jan-David Stütz
      </CopyrightText>
    </Column>
  );
}
