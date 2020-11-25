import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import axios from "axios";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [movieName, setMovieName] = useState("harry");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=454ce2df&s=${movieName}`)
      .then((response) => setMovies(response.data.Search));
  }, [movieName]);
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClickSearch = () => {
    if (searchValue === "") {
      return;
    }
    setMovieName(searchValue);
    setSearchValue("");
  };
  return (
    <>
      <h1>Search For any Movie</h1>
      <div className="search-container">
        <input
          type="search"
          name="search"
          id="search"
          onChange={handleSearchInput}
          value={searchValue}
          placeholder="search by name"
        />
        <button onClick={handleClickSearch}>Search</button>
      </div>
      <Movies movies={movies} />
    </>
  );
}

export default Search;
