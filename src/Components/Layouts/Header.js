import React from "react";
import SearchBox from "../Utilities/SearchBox.js";
import AddMoviewButton from "../Utilities/AddMovie.js";

function Header(props) {
  return (
    <div className="header">
      <AddMoviewButton />
      <SearchBox IsHeader="true" />
    </div>
  );
}

export default Header;
