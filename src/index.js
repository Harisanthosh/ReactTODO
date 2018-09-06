import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import combineReducers from "./reducers/combinerReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const spaStore = createStore(combineReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={spaStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
