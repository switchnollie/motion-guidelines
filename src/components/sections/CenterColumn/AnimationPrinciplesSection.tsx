import React from "react";
import PrincipleSelection from "../../PrincipleSelection";
import LineChart from "../../LineChart";
import SelectionGrid, {
  VisualizerColumn,
  SelectionListColumn
} from "../../SelectionGrid";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function AnimationPrinciplesSection({ lastAnimate }: Props) {
  const { selectedMode } = usePrincipleSelection();
  return (
    <>
      <SelectionGrid>
        <SelectionListColumn>
          <PrincipleSelection />
        </SelectionListColumn>
        <VisualizerColumn>
          <LineChart lastAnimate={lastAnimate} mode={selectedMode} />
        </VisualizerColumn>
      </SelectionGrid>
    </>
  );
}
