import styled, { css, keyframes } from "styled-components";

const DrawLine = keyframes`to { stroke-dashoffset: 0;}`;

export const SquashNStretchLines = styled.path<{
  animationDuration: number;
  lineLength: number | undefined;
}>`
  ${({ animationDuration, lineLength, theme }) => css`
    stroke: ${theme.accentColor};
    stroke-dasharray: ${lineLength};
    stroke-dashoffset: ${lineLength};
    &.animate {
      animation: ${DrawLine} ${animationDuration}ms linear forwards;
    }
  `}
`;
