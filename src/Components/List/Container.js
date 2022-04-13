import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card.js";

const style = {
  width: "100%",
  border: "1px solid red",
  display: "grid",
  height: "500px",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
};

const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "metric 1",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
    {
      id: 2,
      text: "metric 2",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
    {
      id: 3,
      text: "metric 3",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
    {
      id: 4,
      text: "metric 4",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
    {
      id: 5,
      text: "metric 5",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
    {
      id: 6,
      text: "metric 6",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
    {
      id: 7,
      text: "metric 7",
      pos: {
        cols: 1,
        rows: 1,
        start: 1,
      },
    },
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      // dragIndex is start-point, hoverIndex is end-point

      const newArr = [...cards];
      const cardContent = cards[dragIndex];
      newArr.splice(dragIndex, 1);
      newArr.splice(hoverIndex, 0, cardContent);

      setCards(newArr);
    },
    [cards]
  );

  const renderCard = useCallback(
    (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          pos={card.pos}
          moveCard={moveCard}
        />
      );
    },
    [moveCard]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </DndProvider>
  );
};

export default Container;
