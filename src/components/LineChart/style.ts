import styled, { css, keyframes } from "styled-components";

const DrawLine = keyframes`to { stroke-dashoffset: 0;}`;

export const AnimatedLine = styled.path<{
  animationDuration: number;
  animationDelay?: number;
  lineLength: number | undefined;
}>`
  ${({ animationDuration, lineLength, animationDelay, theme }) => css`
    stroke: ${theme.accentColor};
    stroke-dasharray: ${lineLength};
    stroke-dashoffset: ${lineLength};
    &.animate {
      animation: ${DrawLine} ${animationDuration}ms linear
        ${animationDelay ? `${animationDelay}ms` : ""} forwards;
    }
  `}
`;
