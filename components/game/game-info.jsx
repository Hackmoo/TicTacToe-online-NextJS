import clsx from "clsx";
import { Profile } from "./profile/profile";
import { CrossIcon } from "./icons/cross-icon";
import { GameSymbol } from "./game-symbol";
import { gameSymbols } from "./constants";

import avatarUrl from '../header/avatar.png'

const players = [
  {
    id: 1,
    name: "asdasdasdasd",
    rating: "1300",
    symbol: gameSymbols.SQUARE,
    avatar: avatarUrl
  },
  {
    id: 2,
    name: "asadasd",
    rating: "1300",
    symbol: gameSymbols.CROSS,
    avatar: avatarUrl
  },
  {
    id: 3,
    name: "asdasd",
    rating: "1300",
    symbol: gameSymbols.CROSS,
    avatar: avatarUrl
  },
  {
    id: 4,
    name: "asdasd",
    rating: "1300",
    symbol: gameSymbols.CROSS,
    avatar: avatarUrl
  }
];

export function GameInfo({ className, playersAmount }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-r-2xl shadow-md px-8 py-4 rounded-xl justify-between grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersAmount).map((el, i) => {
       return <PlayerInfo key={el.id} playerInfo={el} isRight={i % 2 === 1}/>
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight }) {
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx('relative', isRight && 'order-3')}>
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
      <div className={clsx('text-orange-600 text-lg font-semibold', isRight && 'order-1')}>00:36</div>
      <div className={clsx('h-6 w-px bg-slate-200', isRight && 'order-2')} />
    </div>
  );
}
