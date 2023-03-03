import BannerWithRoundedPicture from "./BannerWithRoundedPicture";
function SmallBanner() {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row m-5 justify-around h-auto sm:items-baseline max-w-7xl xl:mx-auto">
      <BannerWithRoundedPicture
        MainTitle="JEDNODUŠE"
        MainText="Způsoby obrábění máme individuálně připravené a promyšlené."
        AvatarPicture="/Jednoduse.png"
        SecondText="S našimy postupy je možné se seznámít přímo u nás ve výrobě. Společně projdeme co a jak tvoříme ať víte do čeho s námi jdete."
      ></BannerWithRoundedPicture>
      <BannerWithRoundedPicture
        MainTitle="PREZENTACE"
        MainText="Všechny nové výrobky Vám před kompletní výrobou odprezentujeme a doladíme úpravy"
        AvatarPicture="/Prezentace.png"
        SecondText="Není problém domluvit idividuální termín ukázky všech našich výrobků."
      ></BannerWithRoundedPicture>
      <BannerWithRoundedPicture
        MainTitle="PO CELÉ ČR"
        MainText="Dodáváme po celé České republice. Jsme časově flexibilní a mobilní."
        AvatarPicture="/CelaCR.png"
        SecondText="Je možné se telefonicky spojit a probrat veškeré potřeby které máte. Vyřešíme jak termín tak i odeslání a dovoz popřípadě předání přímo u nás"
      ></BannerWithRoundedPicture>
    </div>
  );
}

export default SmallBanner;
