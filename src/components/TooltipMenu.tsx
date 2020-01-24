import React, { Dispatch, SetStateAction, useRef } from "react";
import {
  useTransition,
  useSpring,
  animated,
  ReactSpringHook,
  useChain,
  config
} from "react-spring";
import styled from "styled-components";

export const AnimatedTooltipMenu = styled(animated.div)`
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  font-size: 20px;
  color: #fff;
  transform: translateX(-50%);
  background-color: #fff;
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  padding: 3px;

  span {
    display: inline-flex;
    padding: 7px;
    background: #fff;
    z-index: 1;
    cursor: pointer;
    transition: transform 0.2s ease-out;
    &:hover {
      transform: scale(1.13);
    }
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 16px;
    height: 16px;
    background-color: #fff;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  items: string[];
}

export default function TooltipMenu({ isOpen, setIsOpen, items }: Props) {
  const containerSpringRef = useRef<ReactSpringHook>(null);
  const springProps = useSpring({
    ref: containerSpringRef,
    config: config.stiff,
    from: { opacity: 0, transform: "translate(-50%, -5px)" },
    to: {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translate(-50%, 0px)" : "translate(-50%, -5px)"
    }
  });
  const itemsTransitionsRef = useRef<ReactSpringHook>(null);
  const itemsTransitions = useTransition(isOpen ? items : [], item => item, {
    ref: itemsTransitionsRef,
    unique: true,
    config: config.stiff,
    trail: 200 / items.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });
  useChain(
    isOpen
      ? [containerSpringRef, itemsTransitionsRef]
      : [itemsTransitionsRef, containerSpringRef],
    [0, isOpen ? 0.1 : 0.3]
  );
  return (
    <AnimatedTooltipMenu style={springProps}>
      {itemsTransitions.map(({ item: i, key: k, props: p }) => (
        <animated.span key={k} style={{ ...p }}>
          {i}
        </animated.span>
      ))}
    </AnimatedTooltipMenu>
  );
}
