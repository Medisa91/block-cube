import type { FC } from "react";
import { memo } from "react";
import { Box } from "./Box";
import { Dustbin } from "./Dustbin";
import { MainContainer, BoardGrid, CubeGrid } from "./mainStyle";

export const Container: FC = memo(function Container() {
  return (
    <MainContainer>
      <CubeGrid style={{ overflow: "hidden", clear: "both" }}>
        <Box name="Banana" />
      </CubeGrid>
      <BoardGrid style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin />
      </BoardGrid>
    </MainContainer>
  );
});
