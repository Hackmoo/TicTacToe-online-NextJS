import { useState } from "react";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";
import { useGameState } from "../components/game";
import { GameSymbol } from "../components/game/game-symbol";

export default function HomePage() {
  const [playersAmount, setPlayersAmount] = useState(4);

  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePLayerTimeIsUp,
    winnerSymbol
  } = useGameState(playersAmount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersAmount={playersAmount} />
        <GameInfo
          className="mt-2"
          playersAmount={playersAmount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeIsUp={handlePLayerTimeIsUp}
        />
        {winnerSymbol && (
          <div className="my-4"><GameSymbol symbol={winnerSymbol}/></div>
        )}
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
