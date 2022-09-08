import React, { useEffect } from "react";
import { BoardWrapper, Container, CubeContainer, Item } from "./style";
import { Board } from "../../engin/board";

const GameBoard: React.FC = () => {
  var board = new Board(10);

  board.onMatch = (changedPoints) => {
    console.log(changedPoints);
  };

  board.onCompleted = (rows: number[], cols: number[]) => {
    console.log(rows);
    console.log(cols);
  };

  return (
    <>
      <BoardWrapper>
        <Container>
          <CubeContainer></CubeContainer>
        </Container>
      </BoardWrapper>
    </>
  );
};

export default GameBoard;
