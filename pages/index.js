import Head from "next/head";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Slogan from "../components/Slogan";
import { Canvas } from "@react-three/fiber";
import Object from "../components/Object";
import { OrbitControls } from "@react-three/drei";
import SmallBanner from "../components/SmallBanner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>RVT Kovovýroba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="relative">
          <Slogan />
        </div>

        <MainBanner />
        <div className="h-[28rem] mt-10">
          <Canvas>
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            />
            <ambientLight intensity={(0, 5)} />
            <pointLight position={[-2, -3, 2]} intensity={1} />
            <Object />
          </Canvas>
        </div>
        <SmallBanner></SmallBanner>
      </main>
    </div>
  );
}
