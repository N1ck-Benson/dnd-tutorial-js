import { Fragment, useState } from "react";
import "./App.css";
import Board from "./Components/Chess/Board";
import DndKitFinal from "./Components/dnd-kit-final/DndKitFinal";
import DndKit from "./Components/dnd-kit/DndKit";
import Container from "./Components/List/Container";
import ReactGridLayout from "./Components/ReactGridLayout/ReactGridLayout";
import SimpleGrid from "./Components/SimpleGrid/SimpleGrid";

function App() {
  // Apps: "chess" | "list" | "grid" | "dnd-kit" | "dnd-kit-final" | "react-grid-layout"
  const [app, setApp] = useState("react-grid-layout");

  return (
    <div className="App">
      <button onClick={() => setApp("chess")}>chess</button>
      <button onClick={() => setApp("list")}>list</button>
      <button onClick={() => setApp("grid")}>grid</button>
      <button onClick={() => setApp("dnd-kit")}>dnd-kit</button>
      <button onClick={() => setApp("dnd-kit-final")}>dnd-kit-final</button>
      <button onClick={() => setApp("react-grid-layout")}>
        react-grid-layout
      </button>
      {app === "chess" ? (
        <Board />
      ) : app === "list" ? (
        <Container />
      ) : app === "grid" ? (
        <SimpleGrid />
      ) : app === "dnd-kit" ? (
        <DndKit />
      ) : app === "dnd-kit-final" ? (
        <DndKitFinal />
      ) : (
        <ReactGridLayout />
      )}
    </div>
  );
}

export default App;
