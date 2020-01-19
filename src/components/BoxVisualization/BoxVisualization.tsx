import React, { useState, useEffect } from "react";
import { useSpring, animated, SpringConfig } from "react-spring";
import { Box } from "../Box";
import { BoxWrapper } from "./style";
import useKeyframeBox from "../../hooks/useKeyframeBox";
import useImplementationSelection from "../../hooks/useSoftwareSelection";
import { SoftwareImplementation } from "../../types";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

const AnimatedBox = animated(Box);

export default function BoxVisualization({ lastAnimate }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  const { selectedMode, tension, friction } = useImplementationSelection();
  const springConfig: SpringConfig = { tension, friction };
  const { x } = useSpring(
    toggle ? { config: springConfig, x: 100 } : { x: 0, config: springConfig }
  );
  useEffect(() => {
    setToggle(!toggle);
  }, [lastAnimate]);

  const boxDomEl = useKeyframeBox(toggle, setToggle);
  return (
    <BoxWrapper>
      <Box keyLeft />
      <Box keyRight />
      {selectedMode === SoftwareImplementation.Keyframes ? (
        <Box ref={boxDomEl} main />
      ) : (
        <AnimatedBox
          style={{
            left: x.interpolate(
              (x: number) => `calc(${x}% - ${x * 0.01 * 60}px)`
            )
          }}
          ref={boxDomEl}
          main
        />
      )}
    </BoxWrapper>
  );
}
