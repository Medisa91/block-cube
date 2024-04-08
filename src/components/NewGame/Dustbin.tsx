import type { CSSProperties, FC } from "react";
import { useEffect } from "react";
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
    drop: () => ({ name: "Board" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  useEffect(() => {
    console.log(drop);
  }, [drop]);

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <>
      <BoardWrapper>
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
      </BoardWrapper>
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
    </>
  );
};
