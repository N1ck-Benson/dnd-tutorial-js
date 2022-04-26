export const injectPlusButtons = (layout, cols) => {
  let totalRowsCount = 1;
  let lastRowY = 0;
  layout.forEach((item) => {
    item.y > lastRowY && (lastRowY = item.y) && totalRowsCount++;
  });

  totalRowsCount.forEach((row) => {
    let count = 0;
    while (count < totalRowsCount) {
      const itemsInRow = layout.filter((item) => item.y === row);
      const lastInRow = itemsInRow[itemsInRow.length];
      const lastColUsed = lastInRow.x + lastInRow.w;

      if (lastColUsed < cols) {
        const plusButton = {
          i: `plus_${count}`,
          x: lastColUsed,
          y: count,
          w: 1,
          h: 1,
          static: false,
          minW: 1,
          maxW: 1,
        };

        layout.push(plusButton);
      }

      if (itemsInRow.some((item) => item.h === 2)) {
        count += 2;
      } else {
        count += 1;
      }
    }
  });
};
