import Head from "next/head";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Slogan from "../components/Slogan";
import { Canvas } from "@react-three/fiber";
import Object from "../components/Object";
import { OrbitControls } from "@react-three/drei";
import SmallBanner from "../components/SmallBanner";
import BackgroundWaves from "../components/BackgroundWaves";

export default function Home() {
  return (
    <div className="max-w-7xl ml-auto mr-auto">
      <Header />
      <main className="flex sm:flex-row-reverse mt-5 w-full max-w-7xl xl:mx-auto ">
        <MainBanner />
        {/* <div className="pointer-events-none relative">
          <BackgroundWaves></BackgroundWaves>
        </div>
        */}
      </main>
      <SmallBanner></SmallBanner>
    </div>
  );
}
