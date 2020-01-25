import styled, { css } from "styled-components";

export const StyledTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.fontPrimary};
    margin-bottom: 36px;
  `}
`;

export const MockContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    line-height: 20px;
    span {
      color: ${theme.accentColor};
    }
  `}
`;

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 1.1em;
`;
