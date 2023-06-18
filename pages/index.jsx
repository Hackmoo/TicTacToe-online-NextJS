import { useState } from "react";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";
import { useGameState } from "../components/game";

export default function HomePage() {
  const [playersAmount, setPlayersAmount] = useState(2);

  const { cells, currentMove, nextMove, handleCellClick, winnerSequence} =
    useGameState(playersAmount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersAmount={playersAmount} />
        <GameInfo className="mt-2" playersAmount={playersAmount} currentMove={currentMove}/>
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  );
}
