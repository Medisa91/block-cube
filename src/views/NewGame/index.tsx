import Example from "./../../components/NewGame/example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Main } from "./style";

const NewGame: React.FC = () => {
  return (
    <Main>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </Main>
  );
}

export default NewGame;
