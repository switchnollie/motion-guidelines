import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./fonts.css";
import * as serviceWorker from "./serviceWorker";
import { PrincipleSelectionProvider } from "./hooks/usePrincipleSelection";
import { ImplementationSelectionProvider } from "./hooks/useSoftwareSelection";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <PrincipleSelectionProvider>
      <ImplementationSelectionProvider>
        <App />
      </ImplementationSelectionProvider>
    </PrincipleSelectionProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
