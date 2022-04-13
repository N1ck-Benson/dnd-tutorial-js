import React from "react";

const style = {
  border: "1px dashed grey",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  transition: "grid-template-columns 1s linear",
};

const Tile = ({ size, id, i }) => {
  const { gridColumn, gridRow } = size;
  return (
    <div key={i} style={{ ...style, gridColumn, gridRow }}>
      <h2>{id}</h2>
    </div>
  );
};

export default Tile;
