import { useRef, useEffect, Dispatch, SetStateAction } from "react";
import { SoftwareImplementation } from "../types";
import useImplementationSelection from "./useSoftwareSelection";
import { Easing } from "../types";

const useKeyframeBox = (
  toggle: boolean,
  setToggle: Dispatch<React.SetStateAction<boolean>>
) => {
  const boxDomEl = useRef<HTMLDivElement>(null);
  const { selectedEasing, selectedMode } = useImplementationSelection();

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
    if (selectedEasing) {
      classList?.add(getEasingClass(selectedEasing));
    }
  };

  const startAnimation = (domEl: HTMLDivElement) => {
    const classList = domEl.classList;
    classList?.add("toggle");
  };

  useEffect(() => {
    if (selectedMode === SoftwareImplementation.Spring) {
      clearAnimateClass();
    }
  }, [selectedMode]);

  useEffect(() => {
    if (selectedMode === SoftwareImplementation.Keyframes) {
      if (boxDomEl?.current) {
        if (toggle) {
          startAnimation(boxDomEl.current);
        } else {
          clearAnimateClass();
        }
      }
    }
  }, [toggle]);

  useEffect(changeEasing, [selectedEasing]);

  return boxDomEl;
};

export default useKeyframeBox;
