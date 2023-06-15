import { useState } from "react";
import { gameSymbols, moveQueue } from "./constants";

function getNextMove(currentMove, playersAmount) {

  const slicedMoveOrder = moveQueue.slice(0, playersAmount)

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
export function useGameState(playersAmount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: gameSymbols.CROSS,
  }));
  const nextMove = getNextMove(currentMove, playersAmount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState;
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersAmount),
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
