import React from "react";
import ReactDOM from "react-dom";
// Css Imports
import "./index.scss";

// Component Imports
import App from "./App";
// Service Worker Import
import * as serviceWorker from "./serviceWorker";
// Redux Imports
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Localization Helper Import
import ConnectedIntlProvider from "components/ConnectedIntlProvide";
// Router Import
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <Router>
        <App />
      </Router>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
