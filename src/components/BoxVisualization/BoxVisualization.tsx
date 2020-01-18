import React, { useEffect, useRef, useState } from "react";
import { Box } from "../Box";
import useImplementationSelection from "../../hooks/useSoftwareSelection";
import { BoxWrapper } from "./style";
import { Easing } from "../../types";

interface Props {
  lastAnimate: number;
  setLastAnimate: (x: number) => any;
}

export default function BoxVisualization({ lastAnimate }: Props) {
  const boxDomEl = useRef<HTMLDivElement>(null);
  const { selectedEasing } = useImplementationSelection();
  const [toggle, setToggle] = useState<boolean>(false);

  const clearAnimateClass = () => {
    const classList = boxDomEl?.current?.classList;
    if (classList && classList.contains("toggle")) {
      classList.remove("toggle");
    }
  };

  const clearEasingClasses = () => {
    const classList = boxDomEl?.current?.classList;
    if (classList) {
      classList.remove("ease-in", "ease-out", "ease-in-out");
    }
  };

  const getEasingClass = (easing: Easing) => {
    switch (easing) {
      case Easing.EaseOut:
        return "ease-out";
      case Easing.EaseIn:
        return "ease-in";
      default:
        return "ease-in-out";
    }
  };

  const changeEasing = () => {
    clearEasingClasses();
    const classList = boxDomEl?.current?.classList;
    classList?.add(getEasingClass(selectedEasing));
  };

  const startAnimation = (domEl: HTMLDivElement) => {
    const classList = domEl.classList;
    classList?.add("toggle");
  };

  useEffect(() => {
    if (boxDomEl?.current) {
      if (!toggle) {
        setToggle(true);
        startAnimation(boxDomEl.current);
      } else {
        setToggle(false);
        clearAnimateClass();
      }
    }
  }, [lastAnimate]);

  useEffect(changeEasing, [selectedEasing]);

  return (
    <BoxWrapper>
      <Box keyLeft />
      <Box keyRight />
      <Box ref={boxDomEl} main />
    </BoxWrapper>
  );
}
