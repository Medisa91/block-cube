import React, { useState, useEffect, useRef } from "react";
import { Item, ItemCubeContainer, CubeWrapper } from "./style";
import { Cube } from "../../engin/cube";
import { Board } from "../../engin/board";
import Draggable from "react-draggable";

interface IAxisObject {
  x: number;
  y: number;
}

interface IAxis {
  axis: IAxisObject;
}

function GameCube(props: IAxis) {
  const [axisData, setAxisData] = useState(props.axis);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const cubeRef = useRef<HTMLDivElement>(null);

  const [cube] = useState(() => new Cube());

  const board = new Board();

  const cubeMatrix = cube.getCube();

  // const checkDrop = board.drop(cubeMatrix,)
  const getPosition = () => {
    const x = cubeRef.current?.offsetLeft;
    const y = cubeRef.current?.offsetTop;
    setX(x ? x : 0);
    setY(y ? y : 0);
    // setDeltaPosition({ x: x ? x : 0, y: y ? y: 0 });
  };

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    setAxisData(props.axis);
  }, [props]);

  const onDrop = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    setDeltaPosition({ x: rect.left.toFixed(0), y: rect.top.toFixed(0) });
  };

  // const handleDrag = (e: any, ui: any) => {
  //   setDeltaPosition({
  //     x: x + ui.deltaX,
  //     y: y + ui.deltaY,
  //   });
  // };

  return (
    <CubeWrapper>
      <Draggable
        onStop={onDrop}
      >
        <div ref={cubeRef}>
          {cubeMatrix.map((rows) => {
            return (
              <>
                <ItemCubeContainer>
                  {rows.map((subItems) => {
                    return <Item isFull={subItems} />;
                  })}
                </ItemCubeContainer>
              </>
            );
          })}
        </div>
      </Draggable>
    </CubeWrapper>
  );
}

export default GameCube;
