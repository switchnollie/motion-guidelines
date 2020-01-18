import { createGlobalStyle } from "styled-components";
import { transparentize, desaturate } from "polished";

const fontInverse = "#FFF";
const accentColor = "#647FFF";
const fontPrimary = "rgba(52,61,102,0.5)";

const theme = {
  accentColor,
  fontPrimary,
  fontSecondary: transparentize(0.34, fontPrimary),
  fontInverse,
  fontInverseSecondary: transparentize(0.68, fontInverse),
  pageBackground: "#FFF",
  listHoverBackground: desaturate(0.5, transparentize(0.85, accentColor)),
  columnPadding: "40px"
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Univers', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.fontPrimary};
    overflow: hidden;
    font-size: 12px;
  }
  .App {
    display: flex;
  } 

  * {
    user-select: none;
  }

  h1 {
    font-size: 48px;
    font-weight: 800;
    text-transform: uppercase;
    color: ${theme.fontInverse};
    letter-spacing: 1.42px;
    line-height: 1em;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-weight: 200;
    font-size: 20px;
    color: ${theme.fontInverse};
    letter-spacing: -0.14px;
    line-height: 1em;
    margin: 0;
    padding: 0;
  }
`;

export default theme;
