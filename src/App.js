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

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route name="film" path="/film/:id">
            <MovieDetailPage />
          </Route>
          <Route name="film" path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
