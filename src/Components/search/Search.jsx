import React from "react";
import { MDBCol } from "mdbreact";
import "../search/search.css";

const Search = () => {
  return (
    <MDBCol md="6" className="center-col"> {/* Add a class for styling */}
      <input className="form-control" type="text" placeholder="Busqueda por Titulo o Genero" aria-label="Search" />
    </MDBCol>
  );
}

export default Search;
