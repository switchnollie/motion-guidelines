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
  transform-origin: 0% 50%;

  span {
    display: inline-flex;
    padding: 7px;
    background: #fff;
    z-index: 1;
    /*cursor: pointer;*/
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
  // @ts-ignore
  const { transf, opacity } = useSpring({
    ref: containerSpringRef,
    config: {
      tension: 400,
      friction: 20
    },
    from: {
      opacity: 0,
      transf: [-25, 0.5]
    },
    to: {
      opacity: isOpen ? 1 : 0,
      transf: isOpen ? [0, 1] : [-25, 0.5]
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
    <AnimatedTooltipMenu
      style={{
        opacity,
        transform: transf.interpolate(
          (y: number, scale: number) =>
            `scale(${scale}) translate(-50%, ${y}px)`
        )
      }}
    >
      {itemsTransitions.map(({ item: i, key: k, props: p }) => (
        <animated.span key={k} style={{ ...p }}>
          {i}
        </animated.span>
      ))}
    </AnimatedTooltipMenu>
  );
}
