import clsx from "clsx";
import { Profile } from "./profile/profile";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-r-2xl shadow-md px-8 py-4 rounded-xl flex justify-between"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile /> {/* Here was w-44 in className*/}
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="text-slate-500 text-lg font-semibold">01:09</div>
      </div>
      {/* Second User Below */}
      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold">00:36</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
