import { Fragment, useState } from "react";
import "./App.css";
import Board from "./Components/Chess/Board";
import DndKitFinal from "./Components/dnd-kit-final/DndKitFinal";
import DndKit from "./Components/dnd-kit/DndKit";
import Container from "./Components/List/Container";
import SimpleGrid from "./Components/SimpleGrid/SimpleGrid";

function App() {
  // Apps: "chess" | "list" | "grid" | "dnd-kit" | "dnd-kit-final"
  const [app, setApp] = useState("dnd-kit-final");

  return (
    <div className="App">
      <button onClick={() => setApp("chess")}>chess</button>
      <button onClick={() => setApp("list")}>list</button>
      <button onClick={() => setApp("grid")}>grid</button>
      <button onClick={() => setApp("dnd-kit")}>dnd-kit</button>
      <button onClick={() => setApp("dnd-kit-final")}>dnd-kit-final</button>
      {app === "chess" ? (
        <Board />
      ) : app === "list" ? (
        <Container />
      ) : app === "grid" ? (
        <SimpleGrid />
      ) : app === "dnd-kit" ? (
        <DndKit />
      ) : (
        <DndKitFinal />
      )}
    </div>
  );
}

export default App;
