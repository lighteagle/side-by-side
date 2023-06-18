import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Map from "./Map";

function App() {
  return <Map />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
