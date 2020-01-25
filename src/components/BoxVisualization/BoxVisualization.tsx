import React, { useState } from "react";
import { useSpring, animated, SpringConfig } from "react-spring";
import { Box } from "../Box";
import { BoxWrapper } from "./style";
import useImplementationSelection from "../../hooks/useSoftwareSelection";
import { SoftwareImplementation, NavSection } from "../../types";
import useNavigationSelection from "../../hooks/useNavigationSelection";

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
  const { focusedSection } = useNavigationSelection();
  const springConfig: SpringConfig = { tension, friction };
  const { x } = useSpring(
    toggle ? { config: springConfig, x: 100 } : { x: 0, config: springConfig }
  );
  const handleMainClick = () => {
    setToggle(!toggle);
  };
  const handleLeftClick = () => setToggle(false);
  const handleRightClick = () => setToggle(true);
  const renderedBox =
    selectedMode === SoftwareImplementation.EeaseDuration ? (
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
          left: x.interpolate((x: number) => `calc(${x}% - ${x * 0.01 * 60}px)`)
        }}
        main
      />
    );
  return (
    <BoxWrapper>
      <Box keyLeft onClick={handleLeftClick} />
      <Box keyRight onClick={handleRightClick} />
      {focusedSection === NavSection.Software && renderedBox}
    </BoxWrapper>
  );
}
