import styled from "styled-components";
import Texture from "../../assets/images/texture-wood.jpg";

const Main = styled.div`
  background-image: url(${Texture});
  background-size: cover;
  background-repeat: repeat;
  height: 100vh;
  padding-top: 100px;
`;

export { Main };
