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
      <main>
        <div className="relative">
          <BackgroundWaves></BackgroundWaves>
          <Slogan />
        </div>
        <MainBanner />
        <SmallBanner></SmallBanner>
      </main>
    </div>
  );
}
