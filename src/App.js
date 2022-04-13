import { useState } from "react";
import "./App.css";
import Board from "./Components/Chess/Board";
import Container from "./Components/List/Container";
import SimpleGrid from "./Components/SimpleGrid/SimpleGrid";

function App() {
  // Apps: "chess" | "list" | "grid"
  const [app, setApp] = useState("chess");

  return (
    <div className="App">
      <button onClick={() => setApp("chess")}>chess</button>
      <button onClick={() => setApp("list")}>list</button>
      <button onClick={() => setApp("grid")}>grid</button>
      {app === "chess" ? (
        <Board />
      ) : app === "list" ? (
        <Container />
      ) : (
        <SimpleGrid />
      )}
    </div>
  );
}

export default App;
