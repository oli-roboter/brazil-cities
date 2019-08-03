import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/variables.css";
import "./assets/css/index.css";
import "./assets/css/flex.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk"; //for handling async calls to redux store
import rootReducer from "./root-reducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
