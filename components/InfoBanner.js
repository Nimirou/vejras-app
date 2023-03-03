import React from "react";

function InfoBanner() {
  return (
    <div className="text-center relative bg-[#201E1E] rounded-3xl m-5  hover:border-main-green hover:border-4 border-4 border-transparent">
      <div className="text-3xl font-bold pt-2">Děláme co nás baví</div>
      <div className="sm:pl-36 pt-3 sm:pr-36">
        Naše rodinná firma vznikla v březnu 2017. Naše zkušenosti jsou podloženy
        prací která byla přes třicet let ve výrobě.
      </div>
      <div className="sm:pl-36 sm:pr-36">
        Zabýváme se výrobou přesných rotačních dílců.
      </div>
      <div className="sm:pl-36 sm:pr-36">
        Hlavní činností je výroba rotačních dílců na zakázku, jak kusových tak i
        sériových a to z tyče ale i polotovaru.
      </div>
      <div className="pl-10 pr-10 pt-5 text-l font-bold">
        Vyrábíme díly dle požadavků zákazníka do různých odvětví průmyslu. Naši
        klienti se k nám vrací a spolupráce s nimi je vždy bez problému.
      </div>
      <div className="pb-5 text-l font-bold">
        Náš cíl je dodávat dílce v maximální kvalitě v požadovaných termínech a
        podle přesných specifikací zákazníka.
      </div>
    </div>
  );
}

export default InfoBanner;
