import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import StoreService from "./services/store-service";
import { StoreServiceProvider } from "./components/store-service-context";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import {
  createMuiTheme,
  ThemeProvider as ThemeProviderMaterial,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#F6F6F6",
    },
  },
  media: {
    phone: "(max-width:425px)",
  },
});

// style="background-color:#F6F6F6"

const storeService = new StoreService();
ReactDOM.render(
  <ThemeProviderMaterial theme={theme}>
    <ThemeProviderStyled theme={theme}>
      <Provider store={store}>
        <ErrorBoundry>
          <StoreServiceProvider value={storeService}>
            <Router>
              {/*<Test/>*/}
              <App />
            </Router>
          </StoreServiceProvider>
        </ErrorBoundry>
      </Provider>
    </ThemeProviderStyled>
  </ThemeProviderMaterial>,
  document.getElementById("root")
);

