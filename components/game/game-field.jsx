import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export function GameField({
  className,
  playersAmount,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
  winnerSymbol
}) {
  const actions = (
    <>
      <UiButton size={"md"} variant={"primary"}>
        Ничья
      </UiButton>
      <UiButton size={"md"} variant={"outlined"}>
        Сдаться
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            key={i}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(i)}
            onCLick={() => {
              handleCellClick(i);
            }}
          >
            {symbol && <GameSymbol symbol={symbol} classname="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onCLick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onCLick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10"
      )}
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex gap-1 items-center text-xl leading-tight font-semibold">
          Ход: <GameSymbol symbol={currentMove} classname="w-5 h-5" />
        </div>
        <div className="flex gap-1 items-center text-xs leading-tight text-slate-400">
          Следующий: <GameSymbol symbol={nextMove} classname="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}
function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
      {children}
    </div>
  );
}
