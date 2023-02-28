import React from "react";
import Image from "next/image";

function BannerWithRoundedPicture(props) {
  return (
    <div className="group">
      <div className="-mb-16 text-center pt-8 ">
        <Image
          src={props.AvatarPicture}
          className="rounded-full"
          height={200}
          width={200}
        />
      </div>
      <div className=" group-hover:border-main-green group-hover:border-4 border-4 border-transparent relative w-96 h-40 drop-shadow-xl rounded-3xl ml-auto mr-auto sm:ml-2 sm:mr-2  bg-[#201E1E]">
        <div className="text-center pt-5 font-bold text-3xl">
          {props.MainTitle}
        </div>
        <div className="text-center pt-3 text-xl">{props.MainText}</div>
      </div>
    </div>
  );
}

export default BannerWithRoundedPicture;
