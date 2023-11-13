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
    screenScale = [8, 8, 8];
    screenPosition = [0, -38.5, -50.4];
  }

  return [screenScale, screenPosition];
};

const [modelScale, modelPosition] = adjustModelForScreenSize();


const HeroModel = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  return (
    // <section className='w-full h-screen relative'>
    <Canvas
      // frameloop='demand'
      // shadows
      // dpr={[1, 2]}
      // camera={{ near: 0.1, far: 1000 }}
      // gl={{ preserveDrawingBuffer: true }}
      className={`${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <Suspense fallback={<CanvasLoader />}>
      <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          /> */}
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
    // </section>
  );
};

export default HeroModel;