import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card.js";

const style = {
  width: 400,
  border: "1px red solid",
};

const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
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
