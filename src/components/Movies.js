import React, { useContext } from "react";
import { MovieContext } from "../context";
import Movie from "./Movie";
import styled from "styled-components";
import ReactLoading from "react-loading";

export default function Movies() {
  const { movies } = useContext(MovieContext);

  if (movies.length > 0) {
    return (
      <Wrapper>
        <section>
          {movies.map((item) => {
            return <Movie key={item.id} item={item} />;
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
