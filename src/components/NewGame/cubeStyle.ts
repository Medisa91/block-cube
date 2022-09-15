import styled from "styled-components";

interface Props {
  isFull: boolean;
}

const CubeWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-self: center;
`;

const Item = styled.span`
  width: ${(p: Props) => (p.isFull ? "38px" : "0")};
  height: ${(p: Props) => (p.isFull ? "38px" : "0")};
  background: ${(p: Props) => (p.isFull ? "#e0a55f" : "transparent")};
  display: inline-block;
  border: ${(p: Props) => (p.isFull ? "1px solid rgb(102 40 19)" : "none")};
  box-shadow: ${(p: Props) =>
    p.isFull ? "inset 1px 1px 5px rgb(76 43 24)" : "none"};
  border-radius: 3px;
  display: ${(p: Props) => !p.isFull && "none"};
`;
const ItemCubeContainer = styled.div`
  height: 38px;
`;

export { Item, ItemCubeContainer, CubeWrapper };
