import React from "react";

const Header1 = React.createElement(
  "h1",
  {
    id: "id_001",
    className: "header_title"
  },
  "Hello React !"
);

class Header2 extends React.Component {
  render() {
    return <h2> Hello React !</h2>;
  }
}

class Header3 extends React.PureComponent {
  render() {
    return <h3> Hello React ! </h3>;
  }
}

function Header4(props) {
  return <h4> {props.title}</h4>;
}

let Task1 = () => (
  <div className="container">
    {Header1}
    <Header2 />
    <Header3 />
    <Header4 title="Hello React !!" />
  </div>
);

export default Task1;
