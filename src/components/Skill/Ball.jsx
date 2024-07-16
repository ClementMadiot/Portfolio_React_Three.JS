import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";

import Loader from "../layout/Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  // Initial position
  const [position, setPosition] = useState([0, 0, 0]);
  // Initial rotation
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(() => {
    // Update position and rotation here
    setPosition([
      position[0] + Math.sin(performance.now() / 2000) * 0.1, // Add horizontal movement
      position[1] + Math.cos(performance.now() / 1000) * 0.1, // Add vertical movement
      position[2], // Maintain depth
    ]);
    setRotation([rotation[0], rotation[1] + 0.01, rotation[2]]); // Update Y rotation
  });
  return (
    <Float speed={3} rotationIntensity={0.6} floatIntensity={2}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[0, 0, 0.07]} />
      <mesh castShadow receiveShadow scale={2.6} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          map={decal}
          flatShading
        />
      </mesh>
      <mesh // Ball mesh reference
        position={position}
        rotation={rotation}
      />
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
