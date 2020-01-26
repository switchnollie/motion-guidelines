import React, { useState, ReactElement, CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";
import theme from "../theme";
import { shade, lighten } from "polished";
import { useSpring, animated } from "react-spring";

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${theme.accentColor};
    opacity: 0.9;
  } 70% {
    box-shadow: 0 0 5px 18px ${theme.accentColor};
  } 100% {
    box-shadow: 0 0 0 0 ${theme.accentColor};
    opacity: 0;
  }
`;

const pulseStyles = css`
  ${({ theme }) => css`
    &:hover:not(:focus) {
      background-color: ${shade(0.2, theme.accentColor)};
    }
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      animation: ${Pulse} 2s infinite;
    }
  `}
`;

const roundStyles = css`
  width: 45px !important;
  height: 45px !important;
  border-radius: 50%;
`;

const squaredStyles = css`
  border-radius: 0.3rem;
  width: 128px;
  height: 36px;
`;

const StyledButton = styled(animated.button)<{
  round?: boolean;
  pulse?: boolean;
  disabled?: boolean;
}>`
  ${({ theme: { accentColor, fontInverse }, round, pulse }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${accentColor};
    /*cursor: pointer;*/
    outline: none;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.75;
    border: none;
    color: ${fontInverse};
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
      0 2px 4px 0 rgba(14, 30, 37, 0.34);
    transition: background-color 0.2s ease-out, width 0.3s ease-out,
      height 0.3s ease-out, border-radius 0.3s ease-out;
    &:active {
      background-color: ${shade(0.2, accentColor)};
    }
    &:disabled {
      background-color: ${lighten(0.1, accentColor)} !important;
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.08),
        0 1.5px 3px rgba(0, 0, 0, 0.0115);
    }
    ${round ? roundStyles : squaredStyles}
    ${pulse && pulseStyles}
  `}
`;

const downConfig = { mass: 1, tension: 600, friction: 30 };
const upConfig = { mass: 1, tension: 300, friction: 10 };

interface Props {
  children: ReactElement | string;
  style?: CSSProperties;
  className?: string;
  round?: boolean;
  pulse?: boolean;
  onClick?: (event: React.MouseEvent) => any;
  disabled?: boolean;
  uglyAnimation?: boolean;
}

export default function Button({
  children,
  style,
  round,
  pulse,
  uglyAnimation,
  ...props
}: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const animateInConfig = uglyAnimation
    ? { scaleX: 0.9, config: downConfig }
    : { scale: 0.9, config: downConfig };
  const animateOutConfig = uglyAnimation
    ? { scaleX: 1, config: downConfig }
    : { scale: 1, config: upConfig };
  // @ts-ignore
  const styleProps = useSpring(isPressed ? animateInConfig : animateOutConfig);

  const transform = uglyAnimation
    ? styleProps?.scaleX?.interpolate((x: number) => `scaleX(${x})`)
    : styleProps?.scale?.interpolate((x: number) => `scale(${x})`);
  return (
    <StyledButton
      {...props}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        transform,
        ...style
      }}
      round={round}
      pulse={pulse}
    >
      {children}
    </StyledButton>
  );
}
