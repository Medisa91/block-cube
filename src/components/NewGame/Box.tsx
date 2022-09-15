import type { FC } from "react";
import { useState, useRef, useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Item, ItemCubeContainer, CubeWrapper } from "./cubeStyle";
import { Cube } from "../../engin/cube";
import { Board } from "../../engin/board";
import Draggable from "react-draggable";

export interface BoxProps {
  name: string;
}

interface DropResult {
  name: string;
}

export const Box: FC<BoxProps> = function Box({ name }) {

  const cubeRef = useRef<HTMLDivElement>(null);

  const [cube] = useState(() => new Cube());

  const cubeMatrix = cube.getCube();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <CubeWrapper ref={drag} data-testid={`box`}>
      {/* <Draggable onStop={onDrop}> */}
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
      {/* </Draggable> */}
    </CubeWrapper>
  );
};
