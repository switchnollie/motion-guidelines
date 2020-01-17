import styled, { css } from "styled-components";

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
  `}
`;

export const MockContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
