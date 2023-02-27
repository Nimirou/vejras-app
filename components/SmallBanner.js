import BannerWithRoundedPicture from "./BannerWithRoundedPicture";
function SmallBanner() {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between h-auto sm:items-baseline max-w-7xl xl:mx-auto">
      <BannerWithRoundedPicture
        MainTitle="JEDNODUŠE"
        MainText="Způsoby obrábění máme individuálně připravené a promyšlené."
        AvatarPicture="/Jednoduse.png"
      ></BannerWithRoundedPicture>
      <BannerWithRoundedPicture
        MainTitle="PREZENTACE"
        MainText="Všechny nové výrobky Vám předem prezentujeme."
        AvatarPicture="/Prezentace.png"
      ></BannerWithRoundedPicture>
      <BannerWithRoundedPicture
        MainTitle="PO CELÉ ČR"
        MainText="Dodáváme po celé České republice. Jsme časově flexibilní a mobilní."
        AvatarPicture="/CelaCR.png"
      ></BannerWithRoundedPicture>
    </div>
  );
}

export default SmallBanner;
