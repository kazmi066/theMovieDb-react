import React from "react";
import "./App.css";
import { Header, Movies, Container } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Movies />
      </Container>
    </div>
  );
}

export default App;
