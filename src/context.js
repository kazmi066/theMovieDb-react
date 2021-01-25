import React, { useState, useEffect } from "react";
import axios from "axios";

import { POPULAR_BASE_URL, SEARCH_BASE_URL } from "./API";

const MovieContext = React.createContext();
const rootUrl = POPULAR_BASE_URL;
const searchUrl = SEARCH_BASE_URL;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  //   Get the latest movies
  const getMovies = async () => {
    await axios
      .get(rootUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
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
      value={{
        movies,
        setMovies,
        MovieFinder,
        getMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
