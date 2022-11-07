import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, CameraIcon, PhoneIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col-reverse sm:flex-row-reverse m-5 justify-between h-auto sm:items-baseline max-w-7xl xl:mx-auto">
      <div className="flex flex-grow sm:justify-end justify-evenly mt-5 sm:mt-0">
        <HeaderItem title="O FIRMĚ" Icon={HomeIcon} />
        <HeaderItem title="FOTOGALERIE" Icon={CameraIcon} />
        <HeaderItem title="KONTAKT" Icon={PhoneIcon} />
      </div>
      <Image
        className="object-contain self-center "
        src="/logo.png"
        width={250}
        height={50}
      />
    </header>
  );
}

export default Header;
