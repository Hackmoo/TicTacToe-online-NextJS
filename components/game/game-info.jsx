import clsx from "clsx";
import { Profile } from "./profile/profile";
import { CrossIcon } from "./icons/cross-icon";
import { GameSymbol } from "./game-symbol";
import { gameSymbols } from "./constants";

import avatarUrl from "../header/avatar.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "asdasdasdasd",
    rating: "1300",
    symbol: gameSymbols.CROSS,
    avatar: avatarUrl,
  },
  {
    id: 2,
    name: "asadasd",
    rating: "1300",
    symbol: gameSymbols.ZERO,
    avatar: avatarUrl,
  },
  {
    id: 3,
    name: "asdasd",
    rating: "1300",
    symbol: gameSymbols.TRIANGLE,
    avatar: avatarUrl,
  },
  {
    id: 4,
    name: "asdasd",
    rating: "1300",
    symbol: gameSymbols.SQUARE,
    avatar: avatarUrl,
  },
];

export function GameInfo({ className, playersAmount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-r-2xl shadow-md px-8 py-4 rounded-xl justify-between grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersAmount).map((el, i) => {
        return (
          <PlayerInfo
            key={el.id}
            playerInfo={el}
            isRight={i % 2 === 1}
            isTimerRunning={currentMove === el.symbol}
          />
        );
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 15;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((el) => Math.max(el - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval)
        setSeconds(60)
      }
    }
  }, [isTimerRunning]);

  const getTimerColor = () => {
    if (isTimerRunning){
      return isDanger ? "text-orange-600" : "text-slate-900"
    }
    return 'text-slate-200'
  }

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol}></GameSymbol>
        </div>
      </div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
    </div>
  );
}
