import styled from "styled-components";

interface Props {
  isFull: boolean;
}

const BoardWrapper = styled.div`
  width: 400px;
  height: 400px;
  -moz-box-shadow: inset 5px 8px 10px rgb(76 43 24);
  -webkit-box-shadow: inset 5px 8px 10px rgb(76 43 24);
  box-shadow: inset 5px 8px 10px rgb(76 43 24);
  border-radius: 5px;
  margin: auto;
  display: flex;
`;
const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 7px solid rgb(76 43 24);
  border-radius: 5px;
  margin: auto;
`;
const CubeContainer = styled.div`
  background: rgb(62 31 13);
  height: 100%;
`;
const Item = styled.span`
  width: 38px;
  height: 38px;
  background: ${(p: Props) => (p.isFull ? "#e0a55f" : "#3f1e0f")};
  display: inline-block;
  border: 1px solid rgb(102 40 19);
  box-shadow: inset 1px 1px 5px rgb(76 43 24);
  border-radius: 3px;
`;
const ItemCubeContainer = styled.div`
  height: 38px;
`;

export { BoardWrapper, Container, CubeContainer, Item, ItemCubeContainer };
