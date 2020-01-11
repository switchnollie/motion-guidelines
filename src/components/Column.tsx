import styled, { css } from "styled-components";

const Column = styled.div<{ highlightBackground?: boolean }>`
  ${({ highlightBackground, theme }) => css`
    height: 100vh;
    flex: 1;
    box-sizing: border-box;
    padding: 40px;
    background-color: ${highlightBackground
      ? theme.accentColor
      : theme.pageBackground};
  `}
`;

export default Column;
