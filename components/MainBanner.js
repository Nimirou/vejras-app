import Image from "next/image";

function MainBanner() {
  return (
    <div className="flex sm:flex-row flex-col h-screen pt-32 sm:pt-0">
      <div className=" self-center ">
        <Image
          className="object-contain"
          src="/Logo2.png"
          width={470}
          height={350}
        />
      </div>
      <div className="flex flex-col basis-2/3 sm:pl-28 h-30  mt-4 self-center ">
        <div className="font-bold text-[35px] text-center sm:text-left">
          CNC SOUSTRUŽENÍ A KOVOOBRÁBĚNÍ
        </div>
        <div className="font-bold text-[35px] text-center sm:text-left">
          NA KRÁLOVEHRADECKU
        </div>
        <div className="bg-[#B6D335] sm:w-52 sm:ml-0 sm:mr-0 h-12 flex rounded-lg justify-center mt-10 w-auto ml-24 mr-24">
          <div className="text-black font-bold text-center w-52 text-[26px]">
            Kontakt
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
