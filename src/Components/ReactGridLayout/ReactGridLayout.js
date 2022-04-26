import React, { useRef, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

// Can't get an abstracted component to work in the map function...
// import SingleCard from "./SingleCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

// See examples here:
// https://github.com/react-grid-layout/react-grid-layout/tree/master/test/examples

const initialLayout = [
  { i: "a", x: 0, y: 0, w: 2, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "b", x: 1, y: 0, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "c", x: 2, y: 0, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "d", x: 3, y: 0, w: 2, h: 2, static: false, minW: 1, maxW: 4 },
  { i: "e", x: 4, y: 0, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "f", x: 5, y: 0, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
];

// Get metrics to match against the layouts
// const getMetrics = () => {};

const getGridLayout = () => {
  // if(firestoreHasLayout) { return that layout } else
  return initialLayout;
};

const ReactGridLayout = () => {
  const layout = getGridLayout();
  const editedLayoutRef = useRef(null);
  const handleLayoutChange = (_layout, layouts) => {
    editedLayoutRef.current = layouts;
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditSave = () => {
    // if(isEditing) { save editedLayoutRef.current to firestore }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ padding: "50px" }}>
      <button className="edit_save_button" onClick={handleEditSave}>
        <h1>{!isEditing ? "edit" : "save"}</h1>
      </button>
      <ResponsiveGridLayout
        isDraggable={isEditing}
        compactType={"horizontal"}
        layouts={{ lg: layout }}
        onLayoutChange={handleLayoutChange}
        breakpoints={{ lg: 2560, md: 1440, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 2, xs: 2, xxs: 2 }}
        rowHeight={150}
        width={750}
        useCSSTransforms={true}
        // onDrag
        // onDragStart
        // onDragStop
        // onDrop
        // onResize
      >
        {layout.map((item) => (
          // RGL cross-references items with layout information using the i property
          // This must be included as a key on the given item
          <div
            className={`card_single ${isEditing ? "draggable" : ""}`}
            key={item.i}
          >
            <h1>{item.i}</h1>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default ReactGridLayout;
