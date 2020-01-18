import styled, { css } from "styled-components";
import { transparentize } from "polished";
import Divider from "../../Divider";
import Button from "../../Button";
import RangeInput from "../../RangeInput";

export const FirstTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
  `}
`;

export const SecondTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
    margin: 40px 0 20px;
  `}
`;

export const StyledDivider = styled(Divider)`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: ${theme.columnPadding};
    height: calc(100% - 2 * ${theme.columnPadding});
    box-sizing: border-box;
  `}
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    flex: 1;
  }
`;

export const StyledButton = styled(Button)`
  width: 128px;
`;

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

export const BoxWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  margin-bottom: 17px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &:first-of-type {
    margin-bottom: 14px;
  }
`;

export const StyledRangeInput = styled(RangeInput)`
  width: 128px;
`;

export const SlidersContainer = styled.div`
  margin-top: 20px;
`;
