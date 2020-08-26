import React from "react";

let menuContent = ["All", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

function SortMenu() {
  return <div class="sortMenu">RELEASE DATE</div>;
}

function Menu() {
  const items = menuContent.map((each) => <div class="menuItem">{each}</div>);

  return (
    <div class="contentMenu">
      {items}
      <SortMenu />
    </div>
  );
}

export default Menu;
