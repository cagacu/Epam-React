import React from "react";

let menuContent = ["All", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

function SortMenu() {
  return <div className="sortMenu">RELEASE DATE</div>;
}

function Menu() {
  const items = menuContent.map((each, i) => (
    <div className="menuItem" key={i}>
      <a href="#">{each}</a>
    </div>
  ));

  return (
    <div className="contentMenu">
      {items}
      <SortMenu />
    </div>
  );
}

export default Menu;
