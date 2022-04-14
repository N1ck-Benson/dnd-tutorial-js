import {
  closestCenter,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSwappingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import React, { useState } from "react";
import { cards as data } from "./cards";
import SortableCard from "./SortableCard";

const DndKitFinal = () => {
  const [cards, setCards] = useState(data);
  const [activeId, setActiveId] = useState(null);

  // activeCardIndex

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setCards(() => {
        const oldCardIndex = cards.findIndex((card) => card.id === active.id);
        const newCardIndex = cards.findIndex((card) => card.id === over.id);

        return arrayMove(cards, oldCardIndex, newCardIndex);
      });
    }

    setActiveId(null);
  };

  return (
    <div className="wrapper">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={cards} strategy={rectSwappingStrategy}>
          <div className="cards_grid">
            {cards.map((card) => (
              <SortableCard card={card} activeId={activeId} key={card.id} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DndKitFinal;
