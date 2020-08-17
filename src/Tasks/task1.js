import React from "react";

const Header1 = React.createElement(
  "h1",
  { className: "header_title" },
  "Hello React World"
);

class Header2 extends React.Component {
  render() {
    return <h2> Hello React World ! </h2>;
  }
}

class Header3 extends React.PureComponent {
  render() {
    return <h3> Hello React World ! </h3>;
  }
}

function Header4() {
  return <h4> Hello React World ! </h4>;
}

function Task1() {
  return (
    <div className="container">
      {Header1}
      <Header2 />
      <Header3 />
      <Header4 />
    </div>
  );
}

export default Task1;
