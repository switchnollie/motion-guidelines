import React, { useState, ReactElement, CSSProperties } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { useSpring, animated } from "react-spring";

const StyledButton = styled(animated.button)`
  ${({ theme: { accentColor } }) => css`
    background-color: ${accentColor};
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.75;
    padding: 6px 16px;
    border: none;
    color: #fff;
    border-radius: 0.3rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: background-color 0.2s ease-out;
    &:active {
      background-color: ${darken(0.2, accentColor)};
    }
  `}
`;

const downConfig = { mass: 1, tension: 600, friction: 30 };
const upConfig = { mass: 1, tension: 300, friction: 10 };

interface Props {
  children: ReactElement | string;
  style?: CSSProperties;
  className?: string;
}

export default function Button({ children, style, ...props }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const { scale } = useSpring(
    isPressed
      ? { scale: 0.9, config: downConfig }
      : { scale: 1, config: upConfig }
  );
  return (
    <StyledButton
      {...props}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{ transform: scale.interpolate(x => `scale(${x})`), ...style }}
    >
      {children}
    </StyledButton>
  );
}
