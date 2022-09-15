import type { CSSProperties, FC } from "react";
import { useDrop } from "react-dnd";
import {
  BoardWrapper,
  Container,
  CubeContainer,
  Item,
  ItemCubeContainer,
} from "./boardStyle";
import { ItemTypes } from "./ItemTypes";
import { Board } from "../../engin/board";

export const Dustbin: FC = () => {
  const boardSize = 10;
  var board = new Board(boardSize);

  board.onMatch = (changedPoints) => {
    console.log(changedPoints);
  };

  board.onCompleted = (rows: number[], cols: number[]) => {
    console.log(rows);
    console.log(cols);
  };

  const boardMatrix = board.getBoard();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <>
      {/* <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {isActive ? "Release to drop" : "Drag a box here"}
      </div> */}
      <BoardWrapper data-testid="dustbin">
        <Container>
          <CubeContainer ref={drop} data-testid="dustbin">
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
        {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      </BoardWrapper>
    </>
  );
};
