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
  `}
`;

export default Column;
