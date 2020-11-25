import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState([]);
  const movieId = useParams();
  // console.log(movieInfo);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=454ce2df&i=${movieId.id}`)
      .then((response) => setMovieInfo(response.data));
  }, [movieId]);
  return (
    <>
      {movieInfo.length === undefined && (
        <div className="movie-container">
          <div className="poster">
            <img src={movieInfo.Poster} alt="" />
          </div>
          <div className="movie-info">
            <h1 className="movie-title">{movieInfo.Title}</h1>
            <p>
              <span>Genre:</span> {movieInfo.Genre}
            </p>
            <p>
              <span>Released:</span> {movieInfo.Released}
            </p>
            <p>
              <span>Rated: </span>
              {movieInfo.Rated}
            </p>
            <p>
              <span>IMDB Rating:</span> {movieInfo.Ratings[0].Value}
            </p>
            <p>
              <span>Director:</span> {movieInfo.Director}
            </p>
            <p>
              <span>Writer:</span> {movieInfo.Writer}
            </p>
            <p>
              <span>Actors:</span> {movieInfo.Actors}
            </p>
          </div>
          <h3>Plot</h3>
          <p>{movieInfo.Plot}</p>
          <div className="home-button">
            <Link to="/">
              <button>Back to Home</button>
            </Link>
            <button>
              <a
                href={`https://www.imdb.com/title/${movieId.id}/`}
                className="imdb"
                target="/_blank"
              >
                View on IMDB
              </a>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
