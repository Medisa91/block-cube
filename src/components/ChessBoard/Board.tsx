import type { CSSProperties, FC } from 'react'
import { useEffect, useState } from 'react'

import { BoardSquare } from './BoardSquare'
import type { Game, Position } from './Game'
import { Piece } from './Piece'

export interface BoardProps {
  game: Game
}

/** Styling properties applied to the board element */
const boardStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}
/** Styling properties applied to each square element */
const squareStyle: CSSProperties = { width: '10%', height: '10%' }

/**
 * The chessboard component
 * @param props The react props
 */
export const Board: FC<BoardProps> = ({ game }) => {
  const [[knightX, knightY], setKnightPos] = useState<Position>(
    game.knightPosition,
  )
  useEffect(() => game.observe(setKnightPos))

  function renderSquare(i: number) {
    const x = i % 10
    const y = Math.floor(i / 10)

    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y} game={game}>
          <Piece isKnight={x === knightX && y === knightY} />
        </BoardSquare>
      </div>
    )
  }

  const squares = []
  for (let i = 0; i < 100; i += 1) {
    squares.push(renderSquare(i))
  }
  return <div style={boardStyle}>{squares}</div>
}
