import React from "react";
import SearchBox from "./SearchBox";

function HeaderSearchBox(props) {
    const EmptyBox = () => <span>oops</span>;
  
    return props.IsHeader ? <SearchBox {...props} /> : EmptyBox;  
  }

  export default HeaderSearchBox; 