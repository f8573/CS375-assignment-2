function createGrid(rows, cols) {
  const container = document.querySelector("#grid");
  container.innerHTML = ""; // Clear existing content

  // Set container to grid layout
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${cols}, 16px)`;
  container.style.gap = "0px";

  // Initialize the 2D logic array
  // This maps the visual DOM to a data structure

  const gridState = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));

  for (let y = 0; y < rows; y++) {
    //let vs var
    for (let x = 0; x < cols; x++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";

      // Store coordinates in dataset for easy retrieval
      // dataset property allows you to attach custom data to an HTML element, attributes that start with data-
      cell.dataset.x = x;
      cell.dataset.y = y;

      // // Visual feedback and state update
      // cell.addEventListener("click", () => {
      //   // Update the logic array (1 = occupied/clicked)
      //   if (gridState[x][y] == 0) {
      //     // Toggle visual state
      //     cell.style.backgroundColor = "black";
      //     gridState[x][y] = 1;
      //     console.log(`gridState[${x}][${y}] = 1;`);
      //   } else {
      //     // Untoggle visual state
      //     cell.style.backgroundColor = "white";
      //     gridState[x][y] = 0;
      //     console.log(`gridState[${x}][${y}] = 0;`);
      //   }
      //   // console.table(gridState); // Show the 2D array in console
      // });

      container.appendChild(cell);
    }
  }
  return gridState;
}