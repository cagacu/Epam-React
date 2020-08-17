import React from "react";
import ReactDOM from "react-dom";
import Task1 from "./Tasks/task1.js";

let l = (
  <div>
    <Task1 />
    <hr />
  </div>
);

const container = React.createElement("div", null, l);

const root = document.getElementById("root");

ReactDOM.render(container, root);
