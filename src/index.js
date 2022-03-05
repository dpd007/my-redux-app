import React from "react";
import ReactDOM from "react-dom";
//for providing the state at the top level START
import { Provider } from "react-redux";
import store from "./store/index";
//END
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
