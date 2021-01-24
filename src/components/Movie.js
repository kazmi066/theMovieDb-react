import React from "react";
import styled from "styled-components";

export default function Movie({ item }) {
  const { title, overview, vote_average, poster_path } = item;
  const imageUrl = `http://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`;

  return (
    <Wrapper>
      <div className="movie">
        <img className="poster_image" src={imageUrl} alt="not found" />
        <div className="details">
          <h4>{title}</h4>
          <p className="ratings">{vote_average}</p>
        </div>
        <p className="overview">{overview}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .movie {
    width: 230px;
    height: 360px;
    background-color: rgb(184, 233, 235);
    margin-bottom: 1rem;
    position: relative;
    overflow: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  .poster_image {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }

  .movie:hover .overview {
    transform: translateY(0%);
  }

  .overview {
    transition: transform 0.6s ease-in;
    transform: translateY(-100%);
    background-color: white;
    padding: 1rem;
    position: absolute;
    top: 0;
  }
  .details {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }
  .ratings {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
  }
`;
