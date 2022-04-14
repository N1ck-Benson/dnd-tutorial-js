const gridSizes = {
  SMALL: { gridRowStart: "span 1", gridColumnStart: "span 1", height: "100px" },
  MEDIUM: {
    gridRowStart: "span 1",
    gridColumnStart: "span 2",
    height: "100px",
  },
  LARGE: { gridRowStart: "span 1", gridColumnStart: "span 4", height: "100px" },
  LARGER: {
    gridRowStart: "span 2",
    gridColumnStart: "span 2",
    height: "220px",
  },
  LARGEST: {
    gridRowStart: "span 2",
    gridColumnStart: "span 4",
    height: "220px",
  },
};

export const cards = [
  {
    id: 1,
    name: "metric 1",
    size: gridSizes.SMALL,
  },
  {
    id: 2,
    name: "metric 2",
    size: gridSizes.SMALL,
  },
  {
    id: 3,
    name: "metric 3",
    size: gridSizes.MEDIUM,
  },
  {
    id: 4,
    name: "metric 4",
    size: gridSizes.SMALL,
  },
  {
    id: 5,
    name: "metric 5",
    size: gridSizes.SMALL,
  },
  {
    id: 6,
    name: "metric 6",
    size: gridSizes.SMALL,
  },
  {
    id: 7,
    name: "metric 7",
    size: gridSizes.SMALL,
  },
  {
    id: 8,
    name: "metric 8",
    size: gridSizes.LARGE,
  },
  {
    id: 9,
    name: "metric 9",
    size: gridSizes.LARGER,
  },
  {
    id: 10,
    name: "metric 10",
    size: gridSizes.LARGEST,
  },
];
