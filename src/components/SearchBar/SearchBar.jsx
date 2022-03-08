import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        placeholder="Escribe el nombre del artista..."
        className="search-bar__input"
        type="text"
        onChange={handleSearch}
      />
      <span className="search-bar__icon fas fa-search"></span>
    </div>
  );
};

export default SearchBar;
