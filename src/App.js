import { useState } from "react";
import "./App.css";
import Board from "./Components/Chess/Board";
import Container from "./Components/List/Container";

function App() {
  // Apps: "chess" | "list"
  const [app, setApp] = useState("chess");

  return (
    <div className="App">
      <button onClick={() => setApp("chess")}>chess</button>
      <button onClick={() => setApp("list")}>list</button>
      {app === "chess" ? <Board /> : <Container />}
    </div>
  );
}

export default App;
