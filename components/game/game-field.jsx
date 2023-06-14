import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";
import { useState } from "react";

export function GameField({ className }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState();
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
      <GameMoveInfo actions={actions} />
      <GameGrid>
        {cells.map((_, i) => 
         <GameCell key={i}></GameCell>
        )}
        
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children }) {
  return (
    <button
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
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

function GameMoveInfo({ actions }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex gap-1 items-center text-xl leading-tight font-semibold">
          Ход: <ZeroIcon className="w-5 h-5" />
        </div>
        <div className="flex gap-1 items-center text-xs leading-tight text-slate-400">
          Следующий: <CrossIcon />{" "}
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
