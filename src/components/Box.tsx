import styled, { css } from "styled-components";
import { transparentize } from "polished";

const getTransparency = (
  keyLeft?: boolean,
  keyRight?: boolean,
  main?: boolean
) => {
  if (main) {
    return 0;
  } else if (keyLeft) {
    return 0.5;
  } else if (keyRight) {
    return 0.75;
  }
  return 1;
};

const keyLeftStyles = css`
  left: 0;
`;
const keyRightStyles = css`
  right: 0;
`;
const mainBoxStyles = css`
  left: 0;
  cursor: pointer;
  &.ease-in {
    transition: left 0.4s ease-in, transform 0.4s ease-out;
  }
  &.ease-out {
    transition: left 0.4s ease-out, transform 0.4s ease-out;
  }
  &.ease-in-out {
    transition: left 0.4s ease-in-out, transform 0.4s ease-out;
  }
  &.toggle {
    left: calc(100% - 60px);
    transform: rotate(180deg);
  }
`;

export const Box = styled.div<{
  keyLeft?: boolean;
  keyRight?: boolean;
  main?: boolean;
}>`
  ${({ theme, keyLeft, keyRight, main }) => css`
    border-radius: 7px;
    width: 60px;
    height: 60px;
    background-color: ${transparentize(
      getTransparency(keyLeft, keyRight, main),
      theme.accentColor
    )};
    position: absolute;
    ${keyLeft && keyLeftStyles}
    ${keyRight && keyRightStyles}
    ${main && mainBoxStyles}
  `}
`;
