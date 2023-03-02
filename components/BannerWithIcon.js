import React from "react";
import Image from "next/image";

function BannerWithIcon(props) {
  return (
    <div className="relative flex bg-[#201E1E] border-4 border-transparent rounded-3xl m-5 hover:border-main-green hover:border-4">
      <div>
        <div className="p-5">
          <Image
            src={props.AvatarPicture}
            className="rounded-full"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="p-5 pr-20 pl-20">
        <div>VYRÁBÍME DÍLCE Z</div>
      </div>
    </div>
  );
}

export default BannerWithIcon;
