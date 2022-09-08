import styled from "styled-components";

const BoardWrapper = styled.div`
  width: 400px;
  height: 400px;
  -moz-box-shadow: inset 5px 8px 10px rgb(76 43 24);
  -webkit-box-shadow: inset 5px 8px 10px rgb(76 43 24);
  box-shadow: inset 5px 8px 10px rgb(76 43 24);
  border-radius: 5px;
  margin: auto;
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
`;
const Item = styled.span`
  width: 40px;
  height: 40px;
  background-color: #fff;
`;

export { BoardWrapper, Container, CubeContainer, Item };
