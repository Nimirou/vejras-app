import React from "react";
import Image from "next/image";

function BannerWithRoundedPicture(props) {
  return (
    <div>
      <div className="-mb-16 text-center">
        <Image
          src={props.AvatarPicture}
          className="rounded-full"
          height={200}
          width={200}
        />
      </div>
      <div className="relative w-96 h-40 drop-shadow-xl rounded-3xl bg-[#100d0d]">
        <div className="text-center pt-5 font-bold text-3xl">
          {props.MainTitle}
        </div>
        <div className="text-center pt-3 text-xl">{props.MainText}</div>
      </div>
    </div>
  );
}

export default BannerWithRoundedPicture;
