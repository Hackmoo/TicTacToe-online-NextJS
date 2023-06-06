import { SYMBOL_O, SYMBOL_X } from "./constants";
import { clsx } from "clsx";

export function GameSymbol({ symbol }) {
  return (
    <span
      className={clsx(
        `${symbol === SYMBOL_O ? "text-green-600" : "text-red-400"}`
      )}
    >
      {symbol}
    </span>
  );
}
