import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const SortableCard = ({ card, activeId }) => {
  const { id, name, size } = card;

  const {
    // Default attributes provided by dnd-kit, can be omitted
    attributes,
    // Could instead distinguish setDraggableRef, setDroppableRef:
    // https://docs.dndkit.com/presets/sortable/usesortable#node-ref
    setNodeRef,
    // Pass listeners to the element which will trigger the sort
    listeners,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    ...size,
    opacity: activeId === id ? "0.2" : "1",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      className="card_single"
      style={style}
      {...attributes}
      {...listeners}
    >
      {name}
    </div>
  );
};

export default SortableCard;
