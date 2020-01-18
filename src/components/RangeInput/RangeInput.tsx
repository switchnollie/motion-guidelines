import React from "react";
import theme from "../../theme";
import {
  RangeInputStyled,
  Wrapper,
  StatusText,
  StatusTextContainer
} from "./style";
import { transparentize } from "polished";
import { RangeInputProps } from "./index";

export default function RangeInput(props: RangeInputProps) {
  const { min, max, value, statusText, style, className } = props;
  const getRightColor = ({
    baseColor,
    accentColor,
    inverse
  }: RangeInputProps) => {
    const primary = theme.fontPrimary;
    const contrast = theme.accentColor;
    if (baseColor) {
      return baseColor;
    } else if (accentColor) {
      return contrast;
    } else if (inverse) {
      return transparentize(0.66667, contrast);
    } else {
      return transparentize(0.66667, primary);
    }
  };
  const getLeftColor = ({ accentColor, inverse }: RangeInputProps) => {
    if (accentColor) {
      return accentColor;
    } else if (inverse) {
      return theme.accentColor;
    } else {
      return theme.fontPrimary;
    }
  };
  const baseColor = getRightColor(props);
  const accentColor = getLeftColor(props);
  return (
    <Wrapper style={style} className={className}>
      {statusText && (
        <StatusTextContainer>
          <StatusText
            baseColor={baseColor}
            style={{ left: `${((value - min) / (max - min)) * 100}%` }}
          >
            {statusText}
          </StatusText>
        </StatusTextContainer>
      )}
      <RangeInputStyled
        type="range"
        baseColor={baseColor}
        accentColor={accentColor}
        min={min}
        max={max}
        style={{ "--val": value } as any}
        {...props}
      />
    </Wrapper>
  );
}
