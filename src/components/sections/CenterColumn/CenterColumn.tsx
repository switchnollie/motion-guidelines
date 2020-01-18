import React from "react";
import Column from "../../Column";
import AnimationPrinciplesSection from "./AnimationPrinciplesSection";
import SoftwareImplementationSection from "./SoftwareImplementationSection";
import { FirstTitle, TopContainer, StyledButton } from "./style";
import { Principle } from "../../../types";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn({ lastAnimate, setLastAnimate }: Props) {
  const { selectedMode } = usePrincipleSelection();
  const handleButtonClick = () => setLastAnimate(Date.now());
  const isInAnticipationMode = selectedMode === Principle.Anticipation;
  const svg = require(`!raw-loader!../../../images/play-arrow.svg`);
  return (
    <Column>
      <TopContainer>
        <FirstTitle>Animationsprinzipien</FirstTitle>
        <StyledButton
          round={isInAnticipationMode}
          onClick={handleButtonClick}
          pulse={isInAnticipationMode}
        >
          {isInAnticipationMode ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20px"
              }}
              dangerouslySetInnerHTML={{
                __html: svg.default
              }}
            />
          ) : (
            "Animate"
          )}
        </StyledButton>
      </TopContainer>
      <AnimationPrinciplesSection
        setLastAnimate={setLastAnimate}
        lastAnimate={lastAnimate}
      />
      <SoftwareImplementationSection
        setLastAnimate={setLastAnimate}
        lastAnimate={lastAnimate}
      />
    </Column>
  );
}
