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
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt="no poster found"
                className="img"
              />
              <h3>{movie.title}</h3>
              <Link to={`/${movie.id}`}>
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
