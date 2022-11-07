import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Object() {
  const MainObj = useRef();

  useFrame(() => {
    MainObj.current.rotation.x += 0.002;
    MainObj.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={MainObj} rotation={[80, 40, 25]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} color="green" />
      <meshToonMaterial attach="material" wireframe />
    </mesh>
  );
}

export default Object;
