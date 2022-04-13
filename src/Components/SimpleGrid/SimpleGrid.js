import React, { Fragment, useState } from "react";
import Tile from "./Tile";

const gridSizes = {
  SMALL: { gridRow: "span 1", gridColumn: "span 1" },
  MEDIUM: { gridRow: "span 1", gridColumn: "span 2" },
  LARGE: { gridRow: "span 1", gridColumn: "span 4" },
  LARGER: { gridRow: "span 2", gridColumn: "span 2" },
  LARGEST: { gridRow: "span 2", gridColumn: "span 4" },
};

const cardsTemplate = [
  {
    id: 1,
    text: "metric 1",
    size: gridSizes.SMALL,
  },
  {
    id: 2,
    text: "metric 2",
    size: gridSizes.SMALL,
  },
  {
    id: 3,
    text: "metric 3",
    size: gridSizes.MEDIUM,
  },
  {
    id: 4,
    text: "metric 4",
    size: gridSizes.SMALL,
  },
  {
    id: 5,
    text: "metric 5",
    size: gridSizes.SMALL,
  },
  {
    id: 6,
    text: "metric 6",
    size: gridSizes.SMALL,
  },
  {
    id: 7,
    text: "metric 7",
    size: gridSizes.SMALL,
  },
  {
    id: 8,
    text: "metric 8",
    size: gridSizes.LARGE,
  },
  {
    id: 9,
    text: "metric 9",
    size: gridSizes.LARGER,
  },
];

const style = {
  border: "1px red solid",
  height: "500px",
  width: "750px",
  margin: "100px auto",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridAutoRows: "100px",
  gap: "10px",
  gridAutoFlow: "dense",
};

const SimpleGrid = () => {
  const [cards, setCards] = useState(cardsTemplate);

  const handleClick = () => {
    const newCards = [...cards];
    // newCards[0].size = gridSizes.LARGE;
    newCards.splice(2, 1);
    newCards.push(cards[2]);
    setCards(newCards);
  };

  return (
    <Fragment>
      <button onClick={handleClick}>click</button>
      <div style={style}>
        {cards.map((card, i) => (
          <Tile size={card.size} id={card.id} i={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default SimpleGrid;
