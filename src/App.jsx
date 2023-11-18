import React from "react";
import "./App.css";
import Card from "./Components/moviecards/Card.jsx";

export default function App() {
  return (
    <>
      <div className="row">
        <div className="col" >
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </>
  );
}
