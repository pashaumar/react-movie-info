import React from "react";
import { Link } from "react-router-dom";

function Movies({ movies }) {
  return (
    <div className="movies-container">
      {movies === undefined ? (
        <p>No movie found</p>
      ) : (
        movies.map((movie, index) => {
          return (
            <div key={index + 1} className="movie-card">
              <img src={movie.Poster} alt="" className="img" />
              <h3>{movie.Title}</h3>
              <Link to={`/${movie.imdbID}`}>
                <button>Movie Details</button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Movies;
