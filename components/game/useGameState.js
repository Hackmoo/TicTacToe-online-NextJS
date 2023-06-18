import { useState } from "react";
import { gameSymbols, moveQueue } from "./constants";
import {computeWinner, getNextMove} from './model'

export function useGameState(playersAmount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: gameSymbols.CROSS,
  }));


  const winnerSequence = computeWinner(cells)

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
    winnerSequence
  };
}
