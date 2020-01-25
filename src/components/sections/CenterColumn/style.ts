import styled, { css } from "styled-components";
import Divider from "../../Divider";
import Button from "../../Button";
import RangeInput from "../../RangeInput";

export const FirstTitle = styled.h2<{ hasHighlight?: boolean }>`
  ${({ theme, hasHighlight }) => css`
    position: relative;
    height: 1.5em;
    display: inline-flex;
    align-items: center;
    color: ${theme.fontPrimary};
    ${hasHighlight &&
      `
      &:after {
        content: "●";
        position: absolute;
        top: 50%;
        left: calc((${theme.columnPadding} * -1)/ 2);
        transform: translateY(-50%);
        color: ${theme.accentColor};
        font-size: 10px;
      }
    `}
  `}
`;

export const SecondTitle = styled.h2<{ hasHighlight?: boolean }>`
  ${({ theme, hasHighlight }) => css`
    position: relative;
    color: ${theme.fontPrimary};
    margin: 40px 0 20px;
    height: 1.5em;
    display: inline-flex;
    align-items: center;

    ${hasHighlight &&
      `
      &:after {
        content: "●";
        position: absolute;
        top: 50%;
        left: calc((${theme.columnPadding} * -1)/ 2);
        transform: translateY(-50%);
        color: ${theme.accentColor};
        font-size: 10px;
      }
    `}
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

export const Label = styled.label<{ disabled?: boolean }>`
  ${({ disabled }) => disabled && "opacity: 0.5;"}
`;
