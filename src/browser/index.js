import * as React from "react";
import ReactDOM from "react-dom";
import App from "../shared/App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
