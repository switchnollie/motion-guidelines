import styled, { css } from "styled-components";

const Column = styled.div<{ highlightBackground?: boolean }>`
  ${({ highlightBackground, theme }) => css`
    height: 100vh;
    flex: 1;
    position: relative;
    box-sizing: border-box;
    padding: ${theme.columnPadding};
    background-color: ${highlightBackground
      ? theme.accentColor
      : theme.pageBackground};
    ${highlightBackground &&
      `box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(14, 30, 37, 0.75);
      z-index: 1;
      `}
  `}
`;

export default Column;
