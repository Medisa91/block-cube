import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { type } from "os";

export class Board {
  private static readonly defaultBoardSize: number = 10;
  private board: boolean[][] = [];
  private boardSize: number = Board.defaultBoardSize;

  public constructor(boardSize: number = Board.defaultBoardSize) {
    this.newGame(boardSize);
  }

  public newGame(boardSize: number = Board.defaultBoardSize) {
    this.boardSize = boardSize;
    this.newBoard(boardSize);
  }

  public drop(point: IPoint, cube: ICube) {
    let slicedBoard = this.stretchMatrix(point);

    console.log(this.isMatch(slicedBoard, cube.cube));
    // Raised event
    console.log("Sliced");
    this.print(slicedBoard);

    console.log("Cube");
    this.print(cube.cube);
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

  private stretchMatrix(point: IPoint) {
    let slicedBoard = this.slice(point);

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

export enum CubeType {
  OneOne = 1,
  TwoTwo = 2,
  ThreeThree = 3,

  TwoRow = 4,
  ThreeRow = 5,
  FourRow = 6,
  FiveRow = 7,

  TwoCol = 8,
  ThreeCol = 9,
  FourCol = 10,
  FiveCol = 11,

  SmallLTopRight = 12,
  SmallLTopLeft = 13,
  SmallLDownRight = 14,
  SmallLDownLeft = 15,

  LargeLTopRight = 16,
  LargeLTopLeft = 17,
  LargeLDownRight = 18,
  LargeLDownLeft = 19,
}

class CubeData {
  private static cubes: ICube[] = [
    {
      type: CubeType.OneOne,
      cube: [
        [true, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.TwoTwo,
      cube: [
        [true, true, false, false, false],
        [true, true, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.ThreeThree,
      cube: [
        [true, true, true, false, false],
        [true, true, true, false, false],
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.TwoRow,
      cube: [
        [true, true, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.ThreeRow,
      cube: [
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.FourRow,
      cube: [
        [true, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.FiveRow,
      cube: [
        [true, true, true, true, true],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.TwoCol,
      cube: [
        [true, false, false, false, false],
        [true, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.ThreeCol,
      cube: [
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.FourCol,
      cube: [
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.FiveCol,
      cube: [
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
      ],
    },
    {
      type: CubeType.SmallLTopRight,
      cube: [
        [true, false, false, false, false],
        [true, true, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.SmallLTopLeft,
      cube: [
        [false, true, false, false, false],
        [true, true, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.SmallLDownRight,
      cube: [
        [true, true, false, false, false],
        [true, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.SmallLDownLeft,
      cube: [
        [true, true, false, false, false],
        [false, true, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.LargeLTopRight,
      cube: [
        [true, false, false, false, false],
        [true, false, false, false, false],
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.LargeLTopLeft,
      cube: [
        [false, false, true, false, false],
        [false, false, true, false, false],
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.LargeLDownRight,
      cube: [
        [true, true, true, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      type: CubeType.LargeLDownLeft,
      cube: [
        [false, false, true, false, false],
        [false, false, true, false, false],
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
  ];

  public static getCube(type: CubeType): ICube {
    return this.cubes.filter((x) => x.type === type)[0];
  }
}

class Cube {
  private cube: ICube;
  public static size: number = 5;

  public constructor() {
    const type = Math.floor(Math.random() * 18) + 1;
    this.cube = CubeData.getCube(type);
  }

  public getCubeType = () => this.cube.type;

  public getCube = () => this.cube.cube;
}

export interface ICube {
  type: CubeType;
  cube: boolean[][];
}

export interface IPoint {
  row: number;
  col: number;
}