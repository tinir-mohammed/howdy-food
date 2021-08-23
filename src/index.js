import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import AuthProvider from "./store/AuthContext";
import OrderProvider from "./store/OrderContext";
import OrderDashProvider from './store/OrderDashContext'
import theme from "./Theme/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <OrderProvider>
        <OrderDashProvider>
          <Router>
            <App />
          </Router>
        </OrderDashProvider>
      </OrderProvider>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
