"use client";

import { Model } from "./Nissan";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const CanvasComp = () => {
  return (
    <div className=" absolute left-0 right-0 sm:left-auto md:right-10 2xl:right-20 lg:right-0 flex items-center justify-center h-[40vh] sm:h-[50vh] sm:w-[70vh] md:w-[90vh] 2xl:w-[100vh] bg-transparent">
      <Canvas className=" flex items-center">
        <ambientLight intensity={1} color={"white"} />
        <directionalLight position={[1, 1, -1]} color={"red"} intensity={7} />
        <directionalLight position={[-1, 1, -1]} color={"blue"} intensity={1} />
        <directionalLight position={[1, 1, 1]} color={"red"} intensity={7} />
        <Model />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
