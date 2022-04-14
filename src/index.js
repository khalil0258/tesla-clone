import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ShowContextProvider } from "./Context/show-context";

ReactDOM.render(
  <React.StrictMode>
    <ShowContextProvider>
      <App />
    </ShowContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
