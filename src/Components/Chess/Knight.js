import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/constants";

// The useDrag hook memoizes an object and returns:
// (A) a props object, with props determined by the collector function in the callback
// (B) a ref function, connecting the component to the Dnd backend

// See docs for all properties available on useDrag()

// NB: The !! double-negation operator converts monitor.isDragging() to a boolean

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 75,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      ♘
    </span>
  );
}
