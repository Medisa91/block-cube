import React, { useRef, useState, useEffect } from "react";
import {
  BoardWrapper,
  Container,
  CubeContainer,
  Item,
  ItemCubeContainer,
} from "./style";
import { Board } from "../../engin/board";
import { Cube } from "../../engin/cube";

interface AxisInterface {
  x: number;
  y: number;
}

interface ChangeAxis {
  onChangeAxis: (data: any) => void;
}

function GameBoard(props: ChangeAxis) {
  const myRef = useRef<HTMLDivElement>(null);

  const getPosition = () => {
    const x = myRef.current?.offsetLeft;
    const y = myRef.current?.offsetTop;
    const data = { x, y };
    props.onChangeAxis(data);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  const boardSize = 10;
  var board = new Board(boardSize);
  var cube = new Cube();

  board.onMatch = (changedPoints) => {
    console.log(changedPoints);
  };

  board.onCompleted = (rows: number[], cols: number[]) => {
    console.log(rows);
    console.log(cols);
  };

  const boardMatrix = board.getBoard();
  const cubeMatrix = cube.getCube();
  console.log(cubeMatrix);

  return (
    <div id="board-wrapper" className="drop-target">
      <BoardWrapper>
        <Container>
          <CubeContainer ref={myRef}>
            {boardMatrix.map((rows) => {
              return (
                <ItemCubeContainer>
                  {rows.map((subItems) => {
                    return <Item isFull={subItems} />;
                  })}
                </ItemCubeContainer>
              );
            })}
          </CubeContainer>
        </Container>
      </BoardWrapper>
    </div>
  );
}

export default GameBoard;
