import React from "react";
import "./styles.css";
import Task1 from "./Tasks/task1.js";

let t1 = (
  <fieldset>
    <legend>Task 1</legend>
    <Task1 />
  </fieldset>
);

const container = React.createElement("div", null, t1);

export default function App() {
  return <div className="App">{container}</div>;
}
