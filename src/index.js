import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Home from "./components/Home";
import Register from "./components/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import postReducer from "./reducers/postReducer";
import { Provider } from "react-redux";

const store = createStore(postReducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route exact component={Home} path="/" />
      <Route exact component={App} path="/posts" />
      <Route exact component={Register} path="/register" />

      {/* <Route exact component={Register} path="/register" /> */}
      {/* <PrivateRoute exact component={AllPost} path="/posts" /> */}
      {/* <App /> */}
    </Provider>
  </Router>,
  document.getElementById("root")
);
