import React from "react";
import { connect } from 'react-redux'
import {fetchMovieListAsync, fetchMovieListByGenreAsync, fetchSortedMovieListAsync} from "./../../Core/Actions/actionCreators"
import  {DropdownButton, Dropdown} from "react-bootstrap"
import AppConfig from "../../Core/Utils/configs"

let menuContent = ["All", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

function SortMenu(props) {
  const FirstItem = (props) =>{
    if(props.selected.toLowerCase() !== "select")
      return ( <Dropdown.Item eventKey="-1">SELECT</Dropdown.Item> );
    else
      return null;
  }


  return (
    <div className="sortMenu">
      <DropdownButton id="dropdown-basic-button" title={ props.selectedSortBy } onSelect={ (e)=>props.onSortSelect(e) } >
        <FirstItem selected={ props.selectedSortBy } />
        <Dropdown.Item eventKey="release_date">RELEASE DATE</Dropdown.Item>
        <Dropdown.Item eventKey="title">TITLE</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

function Menu(props) {
  const items = menuContent.map((each, i) => (
    <div className="menuItem" key={i}>
      <a href="#" onClick={ () => props.onMenuClick(each)}>{each}</a>
    </div>
  ));

  return (
    <div className="contentMenu">
      {items}
      <SortMenuConnect />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onMenuClick: ge => (ge.toLowerCase() === "all") ? dispatch(fetchMovieListAsync(AppConfig.MAIN_PAGE_MOVIE_LIMIT)) : dispatch(fetchMovieListByGenreAsync(ge.toLowerCase(), AppConfig.MAIN_PAGE_MOVIE_LIMIT))
})

const mapSortDispatchToProps = dispatch => ({
  onSortSelect : se => (se.toLowerCase() === "-1") ? dispatch(fetchMovieListAsync(AppConfig.MAIN_PAGE_MOVIE_LIMIT)) : dispatch(fetchSortedMovieListAsync(se, AppConfig.MAIN_PAGE_MOVIE_LIMIT))
})

const mapSortStateToProps = (state) => ({
  selectedSortBy : getSelectedSortBy(state.movieList.sortBy)
})

function getSelectedSortBy(s)
{
  switch(s){
    case "release_date": return "RELEASE DATE";
    case "title" : return "TITLE";
    default: return "SELECT";
  }
}


const SortMenuConnect = connect(mapSortStateToProps, mapSortDispatchToProps)(SortMenu);

export { SortMenuConnect };

export default connect(null, mapDispatchToProps)(Menu);
