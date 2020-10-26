import React from "react";
import "./styles.css";
import Header from "./Components/Layouts/Header.js";
import Content from "./Components/Layouts/Content.js";
import Footer from "./Components/Layouts/Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MovieDetailPage from "./Pages/MovieDetails";
import NotFound from "./Pages/NotFound";
import SearchResult from "./Pages/SearchResult";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route name="film" path="/film/:id">
            <MovieDetailPage />
          </Route>
          <Route name="search" path="/search/:searchQuery">
            <SearchResult />
          </Route>
          <Route name="notFound" path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
