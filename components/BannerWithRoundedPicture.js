import React from "react";
import Image from "next/image";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

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
      <div className=" group-hover:border-main-green group-hover:border-4 border-4 border-transparent relative sm:w-96 drop-shadow-xl rounded-3xl ml-auto mr-auto sm:ml-2 sm:mr-2  bg-[#201E1E]">
        <div className="text-center pt-5 font-bold text-3xl">
          {props.MainTitle}
        </div>
        <div className="text-center pt-3 text-l p-5 flex flex-col">
          {props.MainText}
          <ArrowCircleDownIcon className="self-center mt-3"></ArrowCircleDownIcon>
          <ArrowCircleUpIcon className="self-center mt-3"></ArrowCircleUpIcon>
          <div className="text-center text-l mt-3 pl-5 pr-5 pb-5">
            {props.SecondText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerWithRoundedPicture;
