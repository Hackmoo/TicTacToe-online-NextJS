import Image from "next/image"
import avatarDefault from '../../header/avatar.png'
import clsx from "clsx"

export function Profile({avatarSrc = avatarDefault, className}){
    return(
        <div className={clsx(className, 'ml-auto flex items-center gap-2 text-start text-teal-600')}>
        <Image
          src={avatarSrc}
          alt="avatar"
          width={48}
          height={48}
          unoptimized
        />
        <div>
          <div className=" text-lg leading-tight">Test</div>
          <div className="text-slate-400 text-xs leading-tight">
            Rating - test
          </div>
        </div>
      </div>
    )
}