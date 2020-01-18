import React, { useState } from "react";
import { Box } from "../Box";
import { BoxWrapper } from "./style";
import useKeyframeBox from "../../hooks/useKeyframeBox";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function BoxVisualization({ lastAnimate }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const boxDomEl = useKeyframeBox(lastAnimate, toggle, setToggle);
  return (
    <BoxWrapper>
      <Box keyLeft />
      <Box keyRight />
      <Box ref={boxDomEl} main />
    </BoxWrapper>
  );
}
