const arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

function hourGlass(arr) {
  // building an object to hold the positions, then resetting the
  const rows = arr.length;
  const columns = arr[0].length;
  console.log(rows, columns);
  let maxHourGlass = -100;

  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < columns - 2; j++) {
      let hourGlassValue =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      maxHourGlass = Math.max(maxHourGlass, hourGlassValue);
    }
  }
  console.log(maxHourGlass);
}

hourGlass(arr);
