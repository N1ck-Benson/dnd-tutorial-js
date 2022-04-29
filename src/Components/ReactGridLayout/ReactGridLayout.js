import React, { useRef, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { injectPlusButtons, printLoggableLayout } from "./utils";

// Can't get an abstracted component to work in the map function...
// import SingleCard from "./SingleCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

// See examples here:
// https://github.com/react-grid-layout/react-grid-layout/tree/master/test/examples

const initialLayout = [
  { i: "a", x: 0, y: 0, w: 2, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "b", x: 1, y: 0, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "c", x: 2, y: 0, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "d", x: 0, y: 1, w: 2, h: 2, static: false, minW: 1, maxW: 4 },
  { i: "e", x: 1, y: 1, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
  { i: "f", x: 2, y: 1, w: 1, h: 1, static: false, minW: 1, maxW: 4 },
];

// Get metrics to match against the layouts
// const getMetrics = () => {};

const ReactGridLayout = () => {
  const cols = { lg: 5, md: 4, sm: 2, xs: 2, xxs: 2 };
  const getGridLayout = () => {
    // if(firestoreHasLayout) { return that layout } else
    return injectPlusButtons(initialLayout, cols);
  };
  const [layout, setLayout] = useState(getGridLayout());
  const editedLayoutRef = useRef(getGridLayout());

  const handleLayoutChange = (layout) => {
    const copy = JSON.stringify(layout);
    editedLayoutRef.current = JSON.parse(copy);
  };

  const handleBreakpointChange = () => {
    console.log("breakpoint change");
    // const layoutWithoutButtons = layout.filter(
    //   (item) => !item.i.includes("plus")
    // );
    // setLayout(layoutWithoutButtons);
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditSave = () => {
    // if(isEditing) { save editedLayoutRef.current to firestore }
    if (!isEditing) {
      const layoutWithoutButtons = layout.filter(
        (item) => !item.i.includes("plus")
      );
      setLayout(layoutWithoutButtons);
    }
    if (isEditing) {
      const layoutWithButtons = injectPlusButtons(
        editedLayoutRef.current,
        cols
      );
      setLayout(layoutWithButtons);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ padding: "50px" }}>
      <button className="edit_save_button" onClick={handleEditSave}>
        <h1>{!isEditing ? "edit" : "save"}</h1>
      </button>
      <div className="positions">
        <h5>X-positions (may not work below md breakpoint):&nbsp;</h5>
        {["a", "b", "c", "d", "e", "f"].map((p, i) => (
          <p key={i}>
            {p}:{" "}
            {editedLayoutRef.current ? editedLayoutRef.current[i].x : "null"}
            &nbsp;
          </p>
        ))}
      </div>
      <ResponsiveGridLayout
        isDraggable={isEditing}
        isResizable={isEditing}
        compactType={"horizontal"}
        layouts={{ lg: layout }}
        onLayoutChange={handleLayoutChange}
        onBreakpointChange={handleBreakpointChange}
        breakpoints={{ lg: 2560, md: 1024, sm: 768, xs: 480, xxs: 0 }}
        cols={cols}
        rowHeight={150}
        width={750}
        useCSSTransforms={true}
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
