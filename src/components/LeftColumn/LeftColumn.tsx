import React, {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  RefObject
} from "react";
import {
  useSpring,
  useTransition,
  useChain,
  animated,
  ReactSpringHook
} from "react-spring";
import Column from "../Column";
import Divider from "../Divider";
import HsAalenLogo from "../HsAalenLogo";
import { StyledTitle } from "./style";
import { Principle } from "../../types";
import usePrincipleSelection from "../../hooks/usePrincipleSelection";

const AnimatedColumn = animated(Column);
const AnimatedTitle = animated(StyledTitle);

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
  const springRef = useRef() as MutableRefObject<undefined> &
    RefObject<ReactSpringHook>;
  const styleProps = useSpring({
    ref: springRef,
    transform: shown ? "translateX(0%)" : "translateX(-100%)"
  });
  const transRef = useRef() as MutableRefObject<undefined> &
    RefObject<ReactSpringHook>;
  const transitions = useTransition(
    shown ? staggeredItems : [],
    item => item.id,
    {
      ref: transRef,
      unique: true,
      trail: 200 / staggeredItems.length,
      from: { opacity: 0, transform: "translateX(-1rem)" },
      enter: { opacity: 1, transform: "translateX(0rem)" },
      leave: { opacity: 0, transform: "translateX(-1rem)" }
    }
  );
  useChain(shown ? [springRef, transRef] : [transRef, springRef], [
    0,
    shown ? 0.3 : 0.1
  ]);

  console.log(transitions);
  return (
    <AnimatedColumn style={styleProps} highlightBackground>
      {transitions.map(({ item, key, props }, i) => {
        if (i === 0) {
          return (
            <animated.h1 key={key} style={{ ...props }}>
              Motion Guidelines
            </animated.h1>
          );
        }
        return (
          <AnimatedTitle key={key} style={{ ...props }}>
            Kognitive Grundlagen
          </AnimatedTitle>
        );
      })}
      <Divider horizontal inverse />
      <HsAalenLogo />
    </AnimatedColumn>
  );
}
