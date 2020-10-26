import React from "react";
import HeaderSearchBox from "../Utilities/HeaderSearchBox.js";
import AddMoviewButton from "../../Containers/Movie/AddMovie";

function Header(props) {
    return (
      <>
        <SearchHeader />
      </>
    );
}

function SearchHeader(props) {
  return (
    <div className="header">
      <AddMoviewButton />
      <HeaderSearchBox IsHeader="true" />
    </div>
  );
}

export default Header;
