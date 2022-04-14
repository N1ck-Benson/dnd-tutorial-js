import React from "react";

const SortableCard = ({ card }) => {
  const { id, name, size } = card;
  return <div className="card_single">hello, I'm {name}</div>;
};

export default SortableCard;
