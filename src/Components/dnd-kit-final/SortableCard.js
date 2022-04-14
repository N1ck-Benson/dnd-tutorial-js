import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const SortableCard = ({ card, activeId }) => {
  const { id, name, size } = card;

  const {
    transform,
    transition,
    // Default attributes provided by dnd-kit, can be omitted
    attributes,
    // Could instead distinguish setDraggableRef, setDroppableRef:
    // https://docs.dndkit.com/presets/sortable/usesortable#node-ref
    setNodeRef,
    // Pass listeners to the element that will trigger the sort
    listeners,
  } = useSortable({
    id,
    transition: {
      // Add css transition attributes here, or omit for defaults
      duration: 150,
    },
  });

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
      hello, I'm {name}
    </div>
  );
};

export default SortableCard;
