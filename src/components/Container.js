import React from "react";
import styled from "styled-components";

export default function Container({ children }) {
  return <Wrapper className="container">{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
