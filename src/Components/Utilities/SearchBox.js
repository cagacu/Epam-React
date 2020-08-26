import React from "react";

function HeaderSearchBox() {
  return (
    <div className="headerSearchArea">
      <div className="headerSeatchBoxTitle"> FIND YOUR MOVIE </div>
      <div className="headerSeatchBox">
        <input type="text" id="searchBox" />
        <input type="button" id="searchBoxBtn" value="Search" />
      </div>
    </div>
  );
}

function SearchBox(props) {
  const EmptyBox = () => <span>oops</span>;

  return props.IsHeader ? <HeaderSearchBox /> : EmptyBox;
}

export default SearchBox;
