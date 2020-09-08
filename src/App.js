import React, { useState, useCallback } from "react";
import "./styles.css";
import Header from "./Components/Layouts/Header.js";
import Content from "./Components/Layouts/Content.js";
import Footer from "./Components/Layouts/Footer.js";

export default function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(-1);

  const callMovieSelectFunction = useCallback(() => {
    console.log(selectedMovieId, "callback called");
    return selectedMovieId;
  }, [selectedMovieId]);

  return (
    <>
      <Header onMovieSelectCallBack={callMovieSelectFunction} />
      <Content onMovieSelect={setSelectedMovieId} />
      <Footer />
    </>
  );
}
