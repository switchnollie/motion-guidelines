import { createGlobalStyle } from "styled-components";

const theme = {
  accentColor: "#647FFF",
  fontPrimary: "rgba(52,61,102,0.5)",
  fontInverse: "#FFF",
  pageBackground: "#FFF"
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Univers', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .App {
    display: flex;
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
