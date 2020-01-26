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
    ScreenContent = (
      <iframe name="hero" src={`${process.env.REACT_APP_URL}/material`} />
    );
  } else if (selectedDemo === 1) {
    ScreenContent = (
      <iframe name="fluent" src={`${process.env.REACT_APP_URL}/fluent`} />
    );
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
