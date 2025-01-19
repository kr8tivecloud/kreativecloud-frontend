"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("/3d/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

// Preload GLTFLoader
useGLTF.preload("/3d/planet/scene.gltf");

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      style={{
        width: "35vw",
        minWidth: 350,
        maxWidth: 500,
        height: "35vw",
        minHeight: 350,
        maxHeight: 500,
        margin: "auto",
      }}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
