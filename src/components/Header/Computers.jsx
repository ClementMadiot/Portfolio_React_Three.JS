import React, { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import  Loader  from '../layout/Loader'


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <pointLight intensity={5} position={[0, 1.3, 0]} />
      <primitive
        object={computer.scene}
        scale={0.45}
        position={[0, -1, -1.2] }
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.7} />
        <directionalLight color="white" position={[-20, 90, 20]}  />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
