import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board, ICube, IPoint, CubeType } from "./engin/blockCube";

function App() {
  var x = new Board(10);
  x.printBoard();

  let point: IPoint = { row: 5, col: 5 };
  let cube: ICube = {
    type: CubeType.TwoTwo,
    cube: [
      [true, true, false, false, false],
      [true, true, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
  };

  x.drop(point, cube);

  return <></>;
}

export default App;
