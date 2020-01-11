import styled, { css } from "styled-components";

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
  `}
`;
