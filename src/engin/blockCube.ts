import {CubeType} from "./cubeType";
import {CubeData} from "./cubeData";
import {IPoint} from "./ipoint";
import {ICube} from "./icube";
import {Cube} from "./cube";

export class Board {
  private static readonly defaultBoardSize: number = 10;
  private board: boolean[][] = [];
  private boardSize: number = Board.defaultBoardSize;

  public onMatch?: (changedPoints: IPoint[]) => void;
  public onCompleted?: (rows: number[], cols: number[]) => void;

  public constructor(boardSize: number = Board.defaultBoardSize) {
    this.newGame(boardSize);
  }

  public newGame(boardSize: number = Board.defaultBoardSize) {
    this.boardSize = boardSize;
    this.newBoard(boardSize);
  }

  public drop(point: IPoint, cube: ICube) {
    let slicedBoard = this.slice(point);
    slicedBoard = this.stretchMatrix(slicedBoard);

    if (this.isMatch(slicedBoard, cube.cube)) {
      const changedPoints = this.addCubeToBoard(point, cube);

      // Raise Event
      if (this.onMatch !== undefined) this.onMatch(changedPoints);

      // Check if there is any completed row or col
      var completedRows = this.completedRows();
      var completedCols = this.completedCols();
      this.clearRows(completedRows);
      this.clearCols(completedCols);
      // Raise Event
      if (this.onCompleted !== undefined)
        this.onCompleted(completedRows, completedCols);
    }
  }

  private clearRows(rows: number[]) {
    for (let row = 0; row < rows.length; row++)
      for (let col = 0; col < this.boardSize; col++)
        this.board[rows[row]][col] = false;
  }

  private clearCols(cols: number[]) {
    for (let col = 0; col < cols.length; col++)
      for (let row = 0; row < this.boardSize; row++)
        this.board[row][cols[col]] = false;
  }

  private completedCols(): number[] {
    let cols: number[] = [];
    let sum = true;
    for (let col = 0; col < this.boardSize; col++) {
      sum = true;
      for (let row = 0; row < this.boardSize; row++)
        sum = sum && this.board[row][col];

      if (sum) cols.push(col);
    }

    return cols;
  }

  private completedRows(): number[] {
    let rows: number[] = [];
    let sum = true;
    for (let row = 0; row < this.boardSize; row++) {
      sum = true;
      for (let col = 0; col < this.boardSize; col++)
        sum = sum && this.board[row][col];

      if (sum) rows.push(row);
    }

    return rows;
  }

  private addCubeToBoard(point: IPoint, cube: ICube): IPoint[] {
    let result: IPoint[] = [];
    let endRow = point.row + Cube.size;
    let endCol = point.col + Cube.size;
    if (endRow >= this.boardSize) endRow = this.boardSize;
    if (endCol >= this.boardSize) endCol = this.boardSize;
    let r = 0;
    let c = 0;

    for (let row = point.row; row < endRow; row++) {
      c = 0;
      for (let col = point.col; col < endCol; col++) {
        this.board[row][col] = cube.cube[r][c];
        if (cube.cube[r][c]) result.push({ row, col });
        c++;
      }
      r++;
    }

    return result;
  }

  private slice(point: IPoint) {
    let endRow = point.row + Cube.size;
    let endCol = point.col + Cube.size;
    if (endRow >= this.boardSize) endRow = this.boardSize;
    if (endCol >= this.boardSize) endCol = this.boardSize;

    let slicedBoard = this.board
      .slice(point.row, endRow)
      .map((i) => i.slice(point.col, endCol));

    return slicedBoard;
  }

  private stretchMatrix(slicedBoard: boolean[][]) {
    const rowLen = slicedBoard.length;
    const colLen = slicedBoard[0].length;

    const remainedRowsCount = Cube.size - rowLen;
    const remainedColsCount = Cube.size - colLen;

    for (let r = 0; r < remainedRowsCount; r++) {
      slicedBoard.push(new Array(colLen).fill(true));
    }

    for (let r = 0; r < slicedBoard.length; r++) {
      for (let c = 0; c < remainedColsCount; c++) {
        slicedBoard[r].push(true);
      }
    }

    return slicedBoard;
  }

  private isMatch(board: boolean[][], cube: boolean[][]): boolean {
    for (let r = 0; r < Cube.size; r++) {
      for (let c = 0; c < Cube.size; c++) {
        if (cube[r][c] && board[r][c]) return false;
      }
    }

    return true;
  }

  private newBoard(size: number) {
    this.board = new Array(size)
      .fill(false)
      .map(() => new Array(size).fill(false));
  }

  public printBoard() {
    this.print(this.board);
  }

  private print(array: boolean[][]) {
    for (let r = 0; r < array.length; r++) {
      let row: boolean[] = array[r];
      console.log(row);
    }
  }
}