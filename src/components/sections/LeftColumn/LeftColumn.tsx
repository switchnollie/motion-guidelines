import React, { useState, useEffect } from "react";
import * as easings from "d3-ease";
import { useTransition, animated } from "react-spring";
import sectionWahrnehmungImg from "../../../images/SectionWahrnehmung.svg";
import sectionProzesseImg from "../../../images/SectionProzesse.svg";
import sectionGestaltgesetzeImg from "../../../images/SectionGestaltgesetze.svg";
import Column from "../../Column";
import { StyledTitle, StyledImg, MainTitle } from "./style";
import { Principle } from "../../../types";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";

const AnimatedColumn = animated(Column);
const AnimatedImg = animated(StyledImg);
const AnimatedTitle = animated(StyledTitle);
const AnimatedMainTitle = animated(MainTitle);

interface Props {
  lastAnimate: number;
}

const staggeredItems = [1, 2, 3, 4, 5];

export default function LeftColumn({ lastAnimate }: Props) {
  const [shown, setShown] = useState(true);
  const { selectedMode, isUglyToggled } = usePrincipleSelection();
  const isInFollowThroughMode =
    selectedMode && selectedMode === Principle.FollowThrough;
  useEffect(() => {
    if (isInFollowThroughMode) {
      setShown(!shown);
    }
  }, [lastAnimate]);
  const isUsingUglyAnimation = isUglyToggled && isInFollowThroughMode;

  const animateConfig = isUsingUglyAnimation
    ? {
        unique: true,
        trail: 700 / staggeredItems.length,
        from: { opacity: 0, transform: "translateX(-15px)" },
        enter: { opacity: 1, transform: "translateX(0)" },
        leave: { opacity: 0, transform: "translateX(-15px)" },
        easing: easings.easeLinear
      }
    : {
        unique: true,
        trail: 200 / staggeredItems.length,
        from: { opacity: 0, transform: "translateX(-5px)" },
        enter: { opacity: 1, transform: "translateX(0)" },
        leave: { opacity: 0, transform: "translateX(-5px)" }
      };

  const transitions = useTransition(
    shown ? staggeredItems : [],
    item => item,
    animateConfig
  );
  return (
    <AnimatedColumn highlightBackground>
      {transitions.map(({ item, key, props }, i) => {
        if (i === 0) {
          return (
            <AnimatedMainTitle style={{ ...props }} key={key}>
              Motion Guidelines
            </AnimatedMainTitle>
          );
        } else if (i === 1) {
          return (
            <AnimatedTitle style={{ ...props }} key={key}>
              Kognitive Grundlagen
            </AnimatedTitle>
          );
        } else if (i === 2) {
          return (
            <AnimatedImg
              src={sectionWahrnehmungImg}
              style={{ ...props }}
              key={key}
            />
          );
        } else if (i === 3) {
          return (
            <AnimatedImg
              src={sectionProzesseImg}
              style={{ ...props }}
              key={key}
            />
          );
        } else {
          return (
            <AnimatedImg
              src={sectionGestaltgesetzeImg}
              style={{ ...props }}
              key={key}
            />
          );
        }
      })}
    </AnimatedColumn>
  );
}
