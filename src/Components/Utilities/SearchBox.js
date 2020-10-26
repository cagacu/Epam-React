import React, {useState } from "react";
import { useHistory } from 'react-router-dom';

function SearchBox(props) {
  const [search, setSearch] = useState('');

  let history = useHistory();

  function handleClick() {
    history.push(`/search/${search}`);
  }

  return (
    <div className="headerSearchArea">
      <div className="headerSeatchBoxTitle"> FIND YOUR MOVIE </div>
      <div className="headerSeatchBox">
        <input type="text" id="searchBox" onChange={(e) => setSearch(e.target.value)} />
        <input type="button" id="searchBoxBtn" value="Search" onClick={handleClick} />
      </div>
    </div>
  );
}

export default SearchBox;
