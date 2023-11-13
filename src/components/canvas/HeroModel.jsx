import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Rhetorician from "../../models/Rhetorician";

const adjustModelForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 380) {
    screenScale = [3.5, 3.5, 3.5];
    screenPosition = [0, -20.5, -23.4];
  } 
  else if (window.innerWidth < 768) {
    screenScale = [4, 4, 4];
    screenPosition = [0, -18.5, -23.4];
  } 
   else {
    screenScale = [9.5, 9.5, 9.5];
    screenPosition = [0, -38.5, -50.4];
  }

  return [screenScale, screenPosition];
};

const [modelScale, modelPosition] = adjustModelForScreenSize();


const HeroModel = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className='w-full h-screen relative'>
    <Canvas
      className={`${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <Suspense fallback={<CanvasLoader />}>
      <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
        <Rhetorician 
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
          position={modelPosition}
          rotation={[0.1, 0, 0]}
          scale={modelScale}
        />
      </Suspense>

      <Preload all />
    </Canvas>
    </section>
  );
};

export default HeroModel;