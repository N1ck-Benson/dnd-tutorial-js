const gridSizes = {
  SMALL: { gridRowStart: "span 1", gridColumnStart: "span 1" },
  MEDIUM: { gridRowStart: "span 1", gridColumnStart: "span 2" },
  LARGE: { gridRowStart: "span 1", gridColumnStart: "span 4" },
  LARGER: { gridRowStart: "span 2", gridColumnStart: "span 2" },
  LARGEST: { gridRowStart: "span 2", gridColumnStart: "span 4" },
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
];
