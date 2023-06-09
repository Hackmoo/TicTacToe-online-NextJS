import Image from "next/image";
import avatarSrc from "./avatar.png";
import logoSrc from "./logo.svg";
import { Profile } from "../game/profile/profile";
import { ArrowDown } from "./icons/arrow-down";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" variant={"primary"} size='lg'>
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-500">
        <Profile name={'test'} rating={'1300'}/>
        <ArrowDown />
      </button>
    </header>
  );
}
