import React from "react";
import ReactDOM from "react-dom";
import { createStore} from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import App from "./components/app";

const store = createStore(reducer);

// const { inc, dec, rst, rnd } = bindActionCreators(actions, dispatch);


  ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );


