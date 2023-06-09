import Link from "next/link";
import { ArrowLeftIcon } from './icons/arrow-left-icon'
import { StarIcon } from './icons/star-icon'
import { TimerIcon } from './icons/timer-icon'
import { UserIcon } from './icons/user-icon'

export function GameTitle({playersAmount}) {
  return (
    <div className="pl-2">
      <Link href={"#"} className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
      <ArrowLeftIcon></ArrowLeftIcon>
        На главную
        </Link>
        <h1 className="text-4xl leading-tight">Крестики нолики</h1>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <StarIcon />
          <div className="flex items-center gap-1">
            <UserIcon/> {playersAmount}
          </div>
          <div className="flex items-center gap-1">
            <TimerIcon/> 1 мин на ход
          </div>
        </div>
    </div>
  );
}
