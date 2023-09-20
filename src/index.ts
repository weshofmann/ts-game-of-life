export type Cell = boolean;  // true for alive, false for dead
export type Row = Cell[];
export type Board = Cell[][];


export const initialize_cell = (): Cell => {
  return Math.random() < 0.5;
};

// tail-recursive implementation of row initialization, even though TS doesn't optimize for tail-recursion.
// why?  because tail-recursion is awesome.  'nuff said.
export const initialize_row = (width: number, row: Row = []): Row => {
  if (width <= 0) return row;
  const new_row = row.concat(initialize_cell());
  return initialize_row(width - 1, new_row);
};

// now we will initialize the board recursively, of course.  In fact, also tail-recursively!
export const initialize_board = (width: number, height: number, board: Board = []): Board => {
  if (height <= 0) return board;
  const new_board = board.concat([initialize_row(width)]);
  return initialize_board(width, height - 1, new_board);
};

