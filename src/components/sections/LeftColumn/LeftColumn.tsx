import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import sectionWahrnehmungImg from "../../../images/SectionWahrnehmung.svg";
import sectionProzesseImg from "../../../images/SectionProzesse.svg";
import sectionGestaltgesetzeImg from "../../../images/SectionGestaltgesetze.svg";
import Column from "../../Column";
import HsAalenLogo from "../../HsAalenLogo";
import { StyledTitle, StyledImg } from "./style";
import { Principle } from "../../../types";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";

const AnimatedColumn = animated(Column);
const AnimatedImg = animated(StyledImg);
const AnimatedTitle = animated(StyledTitle);

interface Props {
  lastAnimate: number;
}

const staggeredItems = [1, 2, 3, 4, 5];

export default function LeftColumn({ lastAnimate }: Props) {
  const [shown, setShown] = useState(true);
  const { selectedMode } = usePrincipleSelection();
  useEffect(() => {
    if (selectedMode && selectedMode === Principle.FollowThrough) {
      setShown(!shown);
    }
  }, [lastAnimate]);
  const transitions = useTransition(shown ? staggeredItems : [], item => item, {
    unique: true,
    trail: 200 / staggeredItems.length,
    from: { opacity: 0, transform: "translateX(-1rem)" },
    enter: { opacity: 1, transform: "translateX(0rem)" },
    leave: { opacity: 0, transform: "translateX(-1rem)" }
  });
  return (
    <AnimatedColumn highlightBackground>
      {transitions.map(({ item, key, props }, i) => {
        if (i === 0) {
          return (
            <animated.h1 style={{ ...props }} key={key}>
              Motion Guidelines
            </animated.h1>
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
      <HsAalenLogo />
    </AnimatedColumn>
  );
}
