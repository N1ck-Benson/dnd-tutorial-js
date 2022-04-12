import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/constants";

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
