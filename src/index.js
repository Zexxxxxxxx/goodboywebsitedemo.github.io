import React from "react";
import ReactDOM from "react-dom";
import Home from "./home"; // No need to specify .js explicitly
// ...existing code...
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
