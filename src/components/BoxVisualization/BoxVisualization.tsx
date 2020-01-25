import React, { useState } from "react";
import { useSpring, animated, SpringConfig } from "react-spring";
import { Box } from "../Box";
import { BoxWrapper } from "./style";
import useImplementationSelection from "../../hooks/useSoftwareSelection";
import { SoftwareImplementation } from "../../types";

const AnimatedBox = animated(Box);

export default function BoxVisualization() {
  const [toggle, setToggle] = useState<boolean>(false);
  const {
    selectedMode,
    tension,
    friction,
    duration,
    selectedEasing
  } = useImplementationSelection();
  const springConfig: SpringConfig = { tension, friction };
  const { x } = useSpring(
    toggle ? { config: springConfig, x: 100 } : { x: 0, config: springConfig }
  );
  const handleMainClick = () => {
    setToggle(!toggle);
  };
  const handleLeftClick = () => setToggle(false);
  const handleRightClick = () => setToggle(true);
  return (
    <BoxWrapper>
      <Box keyLeft onClick={handleLeftClick} />
      <Box keyRight onClick={handleRightClick} />
      {selectedMode === SoftwareImplementation.Keyframes ? (
        <Box
          withTransition
          duration={duration}
          easing={selectedEasing}
          toggle={toggle}
          main
          onClick={handleMainClick}
        />
      ) : (
        <AnimatedBox
          style={{
            left: x.interpolate(
              (x: number) => `calc(${x}% - ${x * 0.01 * 60}px)`
            )
          }}
          main
        />
      )}
    </BoxWrapper>
  );
}
