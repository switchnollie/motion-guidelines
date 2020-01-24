import styled, { css } from "styled-components";
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

export const TopRightContainer = styled.span`
  display: inline-flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`;
