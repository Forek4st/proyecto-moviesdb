import React from "react";
import "./App.css";
import Card from "./Components/moviecards/Card.jsx";
import Landing from "./Components/landing/Landing.jsx";
import MovieDescription from "./Components/moviedescription/MovieDescription.jsx"
import Search from "./Components/search/Search.jsx"

export default function App() {
  return (
    
    <>
     {/*  <Landing /> */}
     < Search />
      <Card />
     {/* <MovieDescription /> */}
    </>
  );
}
