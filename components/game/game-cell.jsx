import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-500 -ml-px -mt-px flex justify-center items-center bg-transparent",
        `${isWinner && "bg-[#ff0000] opacity-30"}`
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
