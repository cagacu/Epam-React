import React from "react";
import "./styles.css";
import Task1 from "./Tasks/task1.js";

const container = React.createElement("div", null, Task1);

export default function App() {
  return <div className="App">{container}</div>;
}
