import { useState } from "react";
import "./App.css";
import Board from "./Components/Board";

function App() {
  const [knightPosition, setKnightPosition] = useState([1, 1]);

  return (
    <div className="App">
      <Board
        knightPosition={knightPosition}
        setKnightPosition={setKnightPosition}
      />
    </div>
  );
}

export default App;
