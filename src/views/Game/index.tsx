import React, { useState } from "react";
import Board from "../../components/Board";
import CubeGame from "../../components/Cube";
import { Main } from "./style";

const Game: React.FC = () => {
  const [axis, setAxis] = useState({ x: 0, y: 0 });

  const passData = (data: any) => {
    setAxis(data);
  };

  return (
    <>
      <Main>
        <CubeGame axis={axis} />
        <Board onChangeAxis={passData} />
      </Main>
    </>
  );
};
export default Game;
