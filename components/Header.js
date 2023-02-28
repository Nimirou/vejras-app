import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, CameraIcon, PhoneIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="fixed flex flex-col-reverse sm:flex-row-reverse mt-0 sm:mt-5 justify-between w-full sm:items-baseline max-w-7xl xl:mx-auto ">
      <div className="flex flex-grow sm:justify-end justify-evenly mt-5 sm:mt-0 pr-0 sm:pr-10">
        <HeaderItem title="O FIRMĚ" Icon={HomeIcon} />
        <HeaderItem title="FOTOGALERIE" Icon={CameraIcon} />
        <HeaderItem title="KONTAKT" Icon={PhoneIcon} />
      </div>
      <div className="sm:pl-5 self-center sm:self-auto">
        <Image
          className="object-contain self-center "
          src="/logo.png"
          width={370}
          height={40}
        />
      </div>
    </header>
  );
}

export default Header;
