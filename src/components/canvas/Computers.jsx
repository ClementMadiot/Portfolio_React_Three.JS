import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // const light = new THREE.PointLight(0xff0000, 1, 100);
  // light.position.set(50, 50, 50);
  // scene.add(light);

  return (
    <mesh>
      <pointLight intensity={20} />
      <primitive
        object={computer.scene}
        scale={0.7}
        position={[0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Suspense fallback={CanvasLoader}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight color="white" position={[-20, 50, 20]} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />

        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default ComputersCanvas;
