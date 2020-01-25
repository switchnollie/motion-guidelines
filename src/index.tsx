import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./fonts.css";
import * as serviceWorker from "./serviceWorker";
import { PrincipleSelectionProvider } from "./hooks/usePrincipleSelection";
import { ImplementationConfigProvider } from "./hooks/useSoftwareSelection";
import { NavigationSelectionProvider } from "./hooks/useNavigationSelection";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NavigationSelectionProvider>
      <PrincipleSelectionProvider>
        <ImplementationConfigProvider>
          <App />
        </ImplementationConfigProvider>
      </PrincipleSelectionProvider>
    </NavigationSelectionProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
