import React from "react";
import { useState } from "react";
import ReactGridLayout from "react-grid-layout";

// https://isamatov.com/react-grid-layout-tutorial/

const getGridLayout = () => {
  return [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
};

const ReactGridLayout = () => {
  const [layout, setLayout] = useState(getGridLayout());

  return <div>hello</div>;
};

export default ReactGridLayout;
