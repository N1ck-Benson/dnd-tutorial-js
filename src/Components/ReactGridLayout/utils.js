export const printLoggableLayout = (layout) => {
  console.table(
    layout.map((row) => {
      const { i, x, y } = row;
      return { i, x, y };
    })
  );
};

export const injectPlusButtons = (layout, cols) => {
  const newLayout = layout.filter((item) => !item.i.includes("plus"));
  let totalRows = 1;
  let lastRowY = 0;
  layout.forEach((item) => {
    item.y > lastRowY && (lastRowY = item.y) && totalRows++;
  });
  const fixedProps = {
    w: 1,
    h: 1,
    minW: 1,
    maxW: 1,
  };

  let rowCount = 0;
  let plusCount = 0;
  while (rowCount < totalRows) {
    const countCopy = rowCount;
    const itemsInRow = layout.filter((item) => item.y === countCopy);
    const lastInRow = itemsInRow[itemsInRow.length - 1];
    const lastColUsed = lastInRow.x + (lastInRow.w - 1);

    if (lastColUsed < cols) {
      const xPos = lastColUsed + 1;
      const plusButton = {
        ...fixedProps,
        i: `plus_${plusCount}`,
        x: xPos,
        y: rowCount,
        static: false,
      };

      newLayout.push(plusButton);
      plusCount++;
    } else if (rowCount === totalRows - 1) {
      const newRow = rowCount + 1;
      const plusButton = {
        ...fixedProps,
        i: `plus_${plusCount}`,
        x: 0,
        y: newRow,
        static: true,
      };

      newLayout.push(plusButton);
      plusCount++;
    }

    rowCount++;
  }

  printLoggableLayout(newLayout);

  return newLayout;
};
