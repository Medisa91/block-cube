import styled from "styled-components";

interface Props {
  isFull: boolean;
}

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  height: -webkit-fill-available;
`;

const BoardGrid = styled.div`
  width: 400px;
  height: 400px;
  -moz-box-shadow: inset 5px 8px 10px rgb(76 43 24);
  -webkit-box-shadow: inset 5px 8px 10px rgb(76 43 24);
  box-shadow: inset 5px 8px 10px rgb(76 43 24);
  border-radius: 5px;
  margin: auto;
  display: flex;
`;

const CubeGrid = styled.div`
  display: flex;
  margin-left: auto;
  align-self: center;
`;

export { MainContainer, BoardGrid, CubeGrid };
