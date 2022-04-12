import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/constants";
import Square from "./Square";

// This component is the potential drop target for the draggable "knight" item
// The square which forms the main "content" of the component is wrapped with a div that has a ref function

// See docs for all properties available on useDrop()

// The moveKnight function is passed the position of the board square
// For multiple draggable items, we could use begin beginDrag() on the draggable item and monitor.getItem() on this square to make it dynamic

// The dependency array in useDrop enables the memoization of the callback, updating it if the x/y props change

const BoardSquare = ({ x, y, children, setKnightPosition }) => {
  const black = (x + y) % 2 === 1;

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => setKnightPosition([x, y]),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [x, y]
  );

  return (
    <div
      ref={drop}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Square black={black}>{children}</Square>
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: "yellow",
          }}
        />
      )}
    </div>
  );
};

export default BoardSquare;
