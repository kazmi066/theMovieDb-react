import React, { useState } from "react";
import styled from "styled-components";
import { useMovieFetch } from "./hooks/custom/useMovieFetch";
import Modal from "./Modal";
import MovieDetails from "./MovieDetails/MovieDetails";

export default function Movie({
  image,
  movieId,
  movieName,
  clickable,
  ratings,
}) {
  const [show, setShow] = useState(false);

  const [movie, loading, error] = useMovieFetch(movieId);
  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <div>loading....</div>;

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <Modal show={show} handleShow={toggleShow}>
        <MovieDetails movieId={movieId} />
      </Modal>
      {clickable ? (
        <>
          <div className="movie">
            <img
              className="poster_image"
              src={image}
              alt="not found"
              onClick={toggleShow}
            />
            <div className="details">
              <h4>{movieName}</h4>
              <p className="ratings">{ratings}</p>
            </div>
          </div>
          <p className="overview">{movie.overview}</p>
        </>
      ) : (
        <img className="poster_image" src={image} alt="moviecard" />
      )}
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

    &:hover {
      cursor: pointer;
    }
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
