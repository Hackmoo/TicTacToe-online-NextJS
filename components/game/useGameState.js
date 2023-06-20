import { useState } from "react";
import { gameSymbols, moveQueue } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState(playersAmount) {
  const [{ cells, currentMove, playersTimeIsUp }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: gameSymbols.CROSS,
      playersTimeIsUp: [],
    })
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersAmount, playersTimeIsUp);

  const winnerSymbol = nextMove === currentMove ? currentMove :winnerSequence?.[0]

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState;
      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersAmount,
          playersTimeIsUp
        ),
        cells: lastGameState.cells.map((el, i) =>
          i === index ? lastGameState.currentMove : el
        ),
      };
    });
  };

  const handlePLayerTimeIsUp = (symbol) => {
    setGameState((lastGameState, index) => {
      if (lastGameState.cells[index]) return lastGameState;
      return {
        ...lastGameState,
        playersTimeIsUp: [...lastGameState.playersTimeIsUp, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersAmount,
          lastGameState.playersTimeIsUp
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePLayerTimeIsUp,
    winnerSequence,
    winnerSymbol
  };
}
