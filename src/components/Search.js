import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import axios from "axios";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [movieName, setMovieName] = useState("mission impossible");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=09ed0b3699d91eb46176af38ea2466b5&query=${movieName}`
      )
      .then((response) => setMovies(response.data.results));
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
      <h1 className="search-movie-heading">Search For any Movie</h1>
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
