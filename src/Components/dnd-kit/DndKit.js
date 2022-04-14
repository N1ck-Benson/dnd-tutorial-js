import React from "react";
import { DndContext, MouseSensor } from "@dnd-kit/core";
import SortableItem from "./SortableItem";
import { SortableContext, rectSwappingStrategy } from "@dnd-kit/sortable";

const DndKit = () => {
  const items = ["1", "2", "3"];

  const styles = {
    wrapper: {
      display: "flex",
      width: "100%",
      boxSizing: "border-box",
      padding: "20px",
      justifyContent: "center",
    },
  };

  return (
    <DndContext>
      <div style={styles.wrapper}>
        <SortableContext items={items} strategy={rectSwappingStrategy}>
          <ul>
            {items.map((item, i) => (
              <SortableItem id={item} key={i} />
            ))}
          </ul>
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default DndKit;
