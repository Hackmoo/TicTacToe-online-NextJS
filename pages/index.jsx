import { useState } from "react";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";
import { useGameState } from "../components/game";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersAmount, setPlayersAmount] = useState(4);

  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePLayerTimeIsUp,
    winnerSymbol,
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
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <UiModal width={"md"} isOpen={winnerSymbol} onClose={() => console.log('asd')}>
          <UiModal.Header>Игра завершена!</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">Победитель: <span className="text-teal-600">Кто-то</span></div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outlined">
              Вернуться
            </UiButton>
            <UiButton size="md" variant="primary">
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>
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
