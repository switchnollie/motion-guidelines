import React, { Dispatch, SetStateAction } from "react";
import { useTransition, animated } from "react-spring";
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
  const transitions = useTransition(isOpen, null, {
    from: {
      position: "absolute",
      opacity: 0,
      transform: "translate(-50%, -5px)"
    },
    enter: { opacity: 1, transform: "translate(-50%, 0px)" },
    leave: { opacity: 0, transform: "translate(-50%, -5px)" },
    config: { tension: 400, friction: 35 }
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedTooltipMenu style={props}>
          {items.map(i => (
            <span key={i}>{i}</span>
          ))}
        </AnimatedTooltipMenu>
      )
  );
}
