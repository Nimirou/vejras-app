import React from "react";

function InfoBanner() {
  return (
    <div className="text-center relative bg-[#201E1E] rounded-3xl m-5  hover:border-main-green hover:border-4 border-4 border-transparent">
      <div className="text-3xl font-bold pt-2">Děláme co nás baví</div>
      <div className="sm:pl-36 pt-3 sm:pr-36">
        Naše rodinná firma vznikla v březnu 2017, ale opíráme se o více jak
        třicetiletou zkušenost ve výrobě. Zabýváme se výrobou přesných rotačních
        dílců. Hlavní činností je zakázková výroba rotačních dílců, jak kusových
        tak i sériových, z tyče i polotovaru.
      </div>
      <div className="p-5 text-l font-bold">
        Vyrábíme díly dle požadavků zákazníka do různých odvětví průmyslu.
      </div>
      <div className="pb-5 text-2xl font-bold">
        Náš cíl je dodávat dílce v maximální kvalitě a požadovaných termínech.
      </div>
    </div>
  );
}

export default InfoBanner;
