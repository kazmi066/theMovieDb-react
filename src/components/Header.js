import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MovieContext } from "../context";

function Header() {
  const { MovieFinder, getMovies } = useContext(MovieContext);
  const [searchText, setSearchText] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    MovieFinder(searchText);
    setSearchText("");
  };

  const HomeFunction = () => {
    getMovies();
  };

  return (
    <Wrapper>
      <div className="Header-container">
        <h1 onClick={HomeFunction} className="logo">
          Movies-App-React
        </h1>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #2f88b3;
  .logo {
    cursor: pointer;
  }
  .Header-container {
    padding: 1rem 2rem;
    height: 7rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1em;
  }
  input {
    border: none;
    box-shadow: 0 0 1px 0px grey;
    padding: 0.7rem;
    font-size: 1rem;
    outline: none;
  }

  input::placeholder {
    color: grey;
  }

  button {
    padding: 1.1em 1em 0.9em 1em;
    border: none;
    box-shadow: 0 0 1px 0px grey;
    transition: background-color 0.3s ease;
    font-weight: bolder;

    &:hover {
      background-color: #2f88b3;
      cursor: pointer;
    }
  }
`;

export default Header;
