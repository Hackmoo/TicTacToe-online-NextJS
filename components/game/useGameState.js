import { useState } from "react";
import { gameSymbols, moveQueue } from "./constants";

function getNextMove(currentMove) {
  const nextMoveIndex = moveQueue.indexOf(currentMove) + 1;
  return moveQueue[nextMoveIndex] ?? moveQueue[0];
}
export function useGameState() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: gameSymbols.CROSS,
  }));
  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState;
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((el, i) =>
          i === index ? lastGameState.currentMove : el
        ),
      };
    });
  };
  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
