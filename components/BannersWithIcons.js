import React from "react";
import BannerWithIcon from "./BannerWithIcon";
import Image from "next/image";

function BannersWithIcons(props) {
  return (
    <div className="flex justify-around">
      <BannerWithIcon AvatarPicture="/Jednoduse.png"></BannerWithIcon>
      <BannerWithIcon AvatarPicture="/Jednoduse.png"></BannerWithIcon>
    </div>
  );
}

export default BannersWithIcons;
