import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE } from "../../API";
import Movie from "../Movie";
import NoImage from "../../assets/no_image.jpg";
import Axios from "axios";
import { StyledMovieDetails } from "./MovieDetail";

export default function MovieDetails({ movieId }) {
  const [movieData, setMovieData] = useState([]);
  const [moviePoster, setMoviePoster] = useState("");
  const movie = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
  useEffect(() => {
    async function fetcher() {
      await Axios.get(movie)
        .then((response) => {
          setMovieData(response.data);
          setMoviePoster(response.data.poster_path);
        })
        .catch((error) => console.log(error));
    }
    fetcher();
  }, []);
  return (
    <StyledMovieDetails backdrop={movieData.backdrop_path}>
      <div className="moviedetails-content">
        <div className="moviedetails-thumb">
          <Movie
            image={
              moviePoster
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${moviePoster}`
                : NoImage
            }
            clickable={false}
            alt="MovieCard"
          />
        </div>
        <div className="moviedetails-text">
          <h1>{movieData.title}</h1>
          <h3>PLOT</h3>
          <p>{movieData.overview}</p>

          <div className="rating">
            <div>
              <h3>RATING</h3>
              <div className="score">{movieData.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledMovieDetails>
  );
}
