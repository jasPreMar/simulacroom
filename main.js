// main.js: Scaffold for grid-room
// This will handle grid plane creation and interactivity

document.addEventListener('DOMContentLoaded', () => {
  const planes = document.querySelectorAll('.plane');
  const ROOM_CELLS = 30;
  const TABLE_C = { cols: 12, rows: 4 };

  planes.forEach(plane => {
    // Pick dims based on whether it's the table
    const isTable = plane.classList.contains('table');
    const cols = isTable ? TABLE_C.cols : ROOM_CELLS;
    const rows = isTable ? TABLE_C.rows : ROOM_CELLS;

    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      plane.appendChild(cell);
    }
  });
});
