// based on sass styles by Ana Tudor https://codepen.io/thebabydino/pen/goYYrN
import styled, { css } from "styled-components";
import { RangeInputProps } from "./index";

const thumbDiameter = "0.9375rem";
const trackWidth = "100%";
const trackHeight = "0.125rem";

const leftFillStyles = css<any>`
  height: ${trackHeight};
  background: ${({ accentColor }) => accentColor};
`;

const thumbStyles = css<any>`
  box-sizing: border-box;
  border: none;
  width: ${thumbDiameter};
  height: ${thumbDiameter};
  border-radius: 50%;
  background: ${({ accentColor }) => accentColor};
`;

const getTrackStyles = (webkit = false) =>
  webkit ? trackStylesWebkit : trackStyles;

const trackStyles = css<any>`
  box-sizing: border-box;
  border: none;
  width: ${trackWidth};
  height: ${trackHeight};
  background: ${({ baseColor }) => baseColor};
`;

const trackStylesWebkit = css<any>`
  ${trackStyles}
  background: linear-gradient(
      ${({ accentColor }) => accentColor},
      ${({ accentColor }) => accentColor}
    )
    0 / var(--sx) 100% no-repeat ${({ baseColor }) => baseColor} !important;
`;

export const RangeInputStyled = styled.input<RangeInputProps>`
  & {
    --min: ${({ min }) => min};
    --max: ${({ max }) => max};
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--val) - var(--min)) / var(--range));
    --sx: calc(
      0.5 * ${thumbDiameter} + var(--ratio) * (100% - ${thumbDiameter})
    );
    outline: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 0.9375rem;
    background: transparent;
    font: 1em/1 arial, sans-serif;
  }
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-webkit-slider-runnable-track {
    ${getTrackStyles(true)}
  }
  &::-moz-range-track {
    ${getTrackStyles()}
  }
  &::-ms-track {
    ${getTrackStyles()}
  }
  &::-moz-range-progress {
    ${leftFillStyles}
  }
  &::-ms-fill-lower {
    ${leftFillStyles}
  }
  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (${trackHeight} - ${thumbDiameter}));
    ${thumbStyles}
  }
  &::-moz-range-thumb {
    ${thumbStyles}
  }
  &::-ms-thumb {
    margin-top: 0;
    ${thumbStyles}
  }
  &::-ms-tooltip {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const StatusTextContainer = styled.div`
  height: 1.5rem;
  width: 100%;
  position: absolute;
  bottom: 100%;
`;

export const StatusText = styled.span<{ baseColor: string }>`
  position: absolute;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: ${({ baseColor }) => baseColor};
`;
