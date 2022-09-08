import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board, ICube, IPoint, CubeType } from "./engin/blockCube";

function App() {
  var x = new Board(10);

  x.onMatch = (changedPoints) => {
    console.log(changedPoints);
  };

  x.onCompleted = (rows:number[], cols: number[]) => {
    console.log(rows);
    console.log(cols);
  };

  let point: IPoint = { row: 0, col: 0 };
  let cube: ICube = {
    type: CubeType.ThreeThree,
      cube: [
        [true, true, true, false, false],
        [true, true, true, false, false],
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
  };
  x.drop(point, cube);
  x.printBoard();

  let point2: IPoint = { row: 0, col: 3 };
  let cube2: ICube = {
    type: CubeType.FourRow,
      cube: [
        [true, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
  };
  x.drop(point2, cube2);
  x.printBoard();

  let point3: IPoint = { row: 0, col: 7 };
  let cube3: ICube = {
    type: CubeType.TwoRow,
      cube: [
        [true, true, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
  };
  x.drop(point3, cube3);
  x.printBoard();

  let point4: IPoint = { row: 0, col: 9 };
  let cube4: ICube = {
    type: CubeType.OneOne,
      cube: [
        [true, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
  };
  x.drop(point4, cube4);
  x.printBoard();


  return <></>;
}

export default App;
