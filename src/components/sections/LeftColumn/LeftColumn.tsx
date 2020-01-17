import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Column from "../../Column";
import Divider from "../../Divider";
import HsAalenLogo from "../../HsAalenLogo";
import { StyledTitle } from "./style";
import { Principle } from "../../../types";
import usePrincipleSelection from "../../../hooks/usePrincipleSelection";

const AnimatedColumn = animated(Column);

interface Props {
  lastAnimate: number;
}

const staggeredItems = [{ id: "H1" }, { id: "H2" }];

export default function LeftColumn({ lastAnimate }: Props) {
  const [shown, setShown] = useState(true);
  const { selectedMode } = usePrincipleSelection();
  useEffect(() => {
    if (selectedMode && selectedMode === Principle.FollowThrough) {
      setShown(!shown);
    }
  }, [lastAnimate]);
  const transitions = useTransition(
    shown ? staggeredItems : [],
    item => item.id,
    {
      unique: true,
      trail: 200 / staggeredItems.length,
      from: { opacity: 0, transform: "translateX(-1rem)" },
      enter: { opacity: 1, transform: "translateX(0rem)" },
      leave: { opacity: 0, transform: "translateX(-1rem)" }
    }
  );
  return (
    <AnimatedColumn highlightBackground>
      {transitions.map(({ item, key, props }, i) => {
        if (i === 0) {
          return (
            <animated.h1 style={{ ...props }} key={key}>
              Motion Guidelines
            </animated.h1>
          );
        }
        return (
          <animated.div style={{ ...props }}>
            <StyledTitle key={key} style={{ ...props }}>
              Kognitive Grundlagen
            </StyledTitle>
            <Divider horizontal inverse />
          </animated.div>
        );
      })}
      <HsAalenLogo />
    </AnimatedColumn>
  );
}
