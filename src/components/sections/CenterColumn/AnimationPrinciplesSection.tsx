import React from "react";
import PrincipleSelection from "../../PrincipleSelection";
import LineChart from "../../LineChart";
import TwoColGrid, { RightColumn, LeftColumn } from "../../TwoColGrid";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function AnimationPrinciplesSection({ lastAnimate }: Props) {
  const { selectedMode } = usePrincipleSelection();

  return (
    <>
      <TwoColGrid>
        <LeftColumn>
          <PrincipleSelection />
        </LeftColumn>
        <RightColumn>
          <LineChart lastAnimate={lastAnimate} mode={selectedMode} />
        </RightColumn>
      </TwoColGrid>
    </>
  );
}
