import React from "react";
import Column from "../Column";
import PrincipleSelection from "../PrincipleSelection";
import LineChart from "../LineChart";
import {
  FirstTitle,
  StyledDivider,
  TopContainer,
  StyledButton,
  SelectionGrid,
  VisualizerColumn,
  SelectionListColumn,
  SecondTitle
} from "./style";
import usePrincipleSelection from "../../hooks/usePrincipleSelection";
import { Principle } from "../../types";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function CenterColumn({ lastAnimate, setLastAnimate }: Props) {
  const { selectedMode } = usePrincipleSelection();
  const handleButtonClick = () => setLastAnimate(Date.now());
  const isInAnticipationMode = selectedMode === Principle.Anticipation;
  const svg = require(`!raw-loader!../../images/play-arrow.svg`);
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
      <SelectionGrid>
        <SelectionListColumn>
          <PrincipleSelection />
        </SelectionListColumn>
        <VisualizerColumn>
          <LineChart lastAnimate={lastAnimate} mode={selectedMode} />
        </VisualizerColumn>
      </SelectionGrid>
      <SecondTitle>Modellierung in Software</SecondTitle>
      <StyledDivider vertical />
    </Column>
  );
}
