import Image from "next/image";
import avatarDefault from "../../header/avatar.png";
import clsx from "clsx";

export function Profile({ avatar = avatarDefault, className, name, rating }) {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex items-center gap-2 text-start text-teal-600"
      )}
    >
      <Image src={avatar} alt="avatar" width={48} height={48} unoptimized />
      <div className="overflow-hidden">
        <div className=" text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating - {rating}
        </div>
      </div>
    </div>
  );
}
