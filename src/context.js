import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "8dd146b5bc6eff2dd2fd6ce1f485aba5";

const MovieContext = React.createContext();
const rootUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  //   Get the latest movies
  const getMovies = async () => {
    await axios
      .get(rootUrl)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  };

  // Search for Movies
  const MovieFinder = async (searchTerm) => {
    await axios
      .get(searchUrl + searchTerm)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, MovieFinder, getMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
