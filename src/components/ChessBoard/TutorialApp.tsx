import type { CSSProperties, FC } from "react";
import { useMemo } from "react";

import { Board } from "./Board";
import { Game } from "./Game";

export interface ChessboardTutorialAppState {
  knightPosition: [number, number];
}

const containerStyle: CSSProperties = {
  width: 500,
  height: 500,
  border: "7px solid rgb(76 43 24)",
  borderRadius: 5,
  margin: "auto",
};

/**
 * The Chessboard Tutorial Application
 */
export const TutorialApp: FC = () => {
  const game = useMemo(() => new Game(), []);

  return (
    <div style={containerStyle}>
      <Board game={game} />
    </div>
  );
};
