import React, { useContext } from "react";
import { MovieContext } from "../context";
import Movie from "./Movie";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../API";
import NoImage from "../assets/no_image.jpg";

export default function Movies() {
  const { movies } = useContext(MovieContext);

  if (movies.length > 0) {
    return (
      <Wrapper>
        <section>
          {movies.map((item) => {
            return (
              <Movie
                key={item.id}
                clickable
                image={
                  item.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
                    : NoImage
                }
                ratings={item.vote_average}
                movieId={item.id}
                movieName={item.original_title}
              />
            );
          })}
        </section>
      </Wrapper>
    );
  } else {
    return (
      <Section className="loading">
        <ReactLoading type="cylon" color="black" />
      </Section>
    );
  }
}

const Wrapper = styled.section`
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 70vh;
  align-items: center;
`;
