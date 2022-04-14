import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

const SortableItem = ({ id }) => {
  const {
    // Default attributes provided by dnd-kit, can be omitted
    attributes,
    // Pass listeners to the element that will trigger the sort
    listeners,
    transform,
    transition,
    // Can also get setNodeRef here, but see next comment...
  } = useSortable({
    id,
    transition: {
      // Add css transition attributes here, or omit for defaults
      duration: 150,
    },
  });

  // The useSortable hook is an abstraction over the useDraggable and useDroppable hooks. To allow for draggable items and droppable/sortable items to have different dimensions, we need to distinguish the draggable and droppable node refs so we can attach them separately to different nodes.
  const { setDraggableNodeRef, setDroppableNodeRef } = useDraggable({ id });

  const style = {
    // Dnd-kit's CSS module converts transform to a string css value
    transform: CSS.Transform.toString(transform),
    transition,
    height: "250px",
    width: "250px",
    border: "1px black dashed",
  };

  return (
    <li ref={setDroppableNodeRef} style={style} {...attributes} {...listeners}>
      <h1 ref={setDraggableNodeRef}>drag me</h1>
    </li>
  );
};

export default SortableItem;
