import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState([]);
  const movieId = useParams();
  // console.log(movieInfo);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=09ed0b3699d91eb46176af38ea2466b5`
      )
      .then((response) => {
        console.log(response.data);
        return setMovieInfo(response.data);
      });
  }, [movieId]);
  return (
    <>
      {movieInfo.length === undefined && (
        <div className="movie-container">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w185/${movieInfo.poster_path}`}
              alt=""
            />
          </div>
          <div className="movie-info">
            <h1 className="movie-title">{movieInfo.title}</h1>
            <p>
              <span>Genre:</span> {movieInfo.genres[0].name}
            </p>
            <p>
              <span>Released:</span> {movieInfo.release_date}
            </p>
            <p>
              <span>Rated: </span>
              {movieInfo.vote_average}
            </p>
            <p>
              <span>Pouplarity: </span> {movieInfo.popularity}
            </p>
            <p>
              <span>Revenue:</span> {movieInfo.revenue}
            </p>
            <p>
              <span>Runtime:</span> {movieInfo.runtime}
            </p>
          </div>
          <h3>Plot</h3>
          <p>{movieInfo.overview}</p>
          <div className="home-button">
            <Link to="/">
              <button>Back to Home</button>
            </Link>
            <button>
              <a
                href={`https://www.imdb.com/title/${movieId.imdb_id}/`}
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
