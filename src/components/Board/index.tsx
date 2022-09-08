import React, { useEffect, useState } from "react";
import { BoardWrapper, Container, CubeContainer, Item } from "./style";
import { ICube } from "../../engin/blockCube";

const Board: React.FC = () => {
  let boardMatrix: boolean[][] = [[], []];
  const [items, setItems] = useState([]);

  useEffect(() => {
    boardMatrix = [...Array(10)].map((e) => Array(10).fill(false));
    // setItems(boardMatrix);
  }, []);

  return (
    <>
      <BoardWrapper>
        <Container>
          <CubeContainer>
            {/* {items.map((r) => r.map((c) => <Item />))} */}
          </CubeContainer>
        </Container>
      </BoardWrapper>
    </>
  );
};

export default Board;
