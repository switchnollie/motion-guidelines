import React, { useState } from "react";
import Column from "../../Column";
import SmartphoneFrame from "../../SmartphoneFrame";
import DesignRules from "./DesignRules";
import DemoSelection from "./DemoSelection";
import HsAalenLogo from "../../HsAalenLogo";
import { CopyrightText } from "./style";
import useNavigationSelection from "../../../hooks/useNavigationSelection";
import { NavSection } from "../../../types";

export default function RightColumn() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);
  const { focusedSection } = useNavigationSelection();
  let ScreenContent = null;
  if (selectedDemo === 0) {
    ScreenContent = <iframe name="hero" src="http://127.0.0.1:8080/#/" />;
  } else if (selectedDemo === 1) {
    ScreenContent = <iframe name="fluent" src="http://127.0.0.1:8081/#/" />;
  }
  return (
    <Column>
      <DesignRules />
      <DemoSelection value={selectedDemo} setValue={setSelectedDemo} />
      <SmartphoneFrame active={focusedSection === NavSection.Demos}>
        {ScreenContent && ScreenContent}
      </SmartphoneFrame>
      <HsAalenLogo />
      <CopyrightText>
        ©&nbsp;Tim Weise, Yannick Schiele, Jan-David Stütz
      </CopyrightText>
    </Column>
  );
}
