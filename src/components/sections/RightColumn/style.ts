import styled, { css } from "styled-components";

export const StyledTitle = styled.h2<{ hasHighlight?: boolean }>`
  ${({ theme, hasHighlight }) => css`
    color: ${theme.fontPrimary};
    margin-bottom: 36px;
    position: relative;
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

export const CopyrightText = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.columnPadding};
    font-size: 8px;
    opacity: 0.5;
    left: 22px;
  `}
`;
