import styled, { css } from "styled-components";
import Divider from "../Divider";

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
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
