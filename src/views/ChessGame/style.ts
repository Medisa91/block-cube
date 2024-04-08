import styled from "styled-components";
import Texture from "../../assets/images/texture-wood.jpg";

const Main = styled.div`
  background-image: url(${Texture});
  background-size: cover;
  background-repeat: repeat;
  height: 100vh;
  padding-top: 70px;
  display: block;
  text-align: -webkit-center;
  // display: grid;
  // grid-template-rows: 1fr 6fr 1fr;
  // grid-template-columns: 1fr 3fr 1fr;
`;

export { Main };
