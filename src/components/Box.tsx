import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { Easing } from "../types";

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
const getMainBoxStyles = (
  duration: number,
  easing: string,
  withTransition: boolean,
  toggle?: boolean
) => css`
  left: 0;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
    0 2px 4px 0 rgba(14, 30, 37, 0.34);
  /*cursor: pointer;*/
  ${withTransition && `transition: left ${duration}ms ${easing};`}
  ${toggle && `left: calc(100% - 60px);`}
`;

type BoxProps = {
  keyLeft?: boolean;
  keyRight?: boolean;
  main?: boolean;
  withTransition?: boolean;
  toggle?: boolean;
  duration?: number;
  easing?: Easing | null;
};
const defaultProps = {
  duration: 400,
  easing: Easing.EaseOut
};
export const Box = styled.div<BoxProps>`
  ${({
    theme,
    keyLeft,
    keyRight,
    main,
    duration,
    easing,
    withTransition,
    toggle
  }) => css`
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
    ${main && getMainBoxStyles(duration!, easing!, !!withTransition, toggle)}
  `}
`;

Box.defaultProps = defaultProps;
