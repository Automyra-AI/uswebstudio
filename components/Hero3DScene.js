"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";

/**
 * Hero3DScene — restrained, editorial 3D focal piece.
 *
 * One glass icosahedron, slow rotation, calm float, subtle cursor follow.
 * Single soft red rim light; everything else is neutral studio lighting.
 */

function CameraRig() {
  useFrame((state) => {
    const { mouse, camera } = state;
    // Very subtle, slow follow — never jittery, never theatrical
    camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.025;
    camera.position.y += (-mouse.y * 0.2 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function GlassObject() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.045;
    ref.current.rotation.x += delta * 0.018;
  });

  return (
    <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.45}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.7, 6]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={512}
          transmission={1}
          thickness={1.4}
          roughness={0.06}
          ior={1.4}
          chromaticAberration={0.03}
          anisotropy={0.1}
          distortion={0.12}
          distortionScale={0.3}
          temporalDistortion={0.02}
          color="#ffffff"
          attenuationColor="#e11d2a"
          attenuationDistance={3.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene({ className = "" }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.4], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <CameraRig />

          <ambientLight intensity={0.35} />
          <directionalLight
            position={[3, 3.5, 3]}
            intensity={1.05}
            color="#ffffff"
          />
          <directionalLight
            position={[-3, -2, -1]}
            intensity={0.3}
            color="#9bb6c9"
          />
          <pointLight position={[2.5, -1, 1.5]} intensity={0.45} color="#e11d2a" />

          <Environment preset="city" />

          <GlassObject />

          <ContactShadows
            position={[0, -2.0, 0]}
            opacity={0.32}
            scale={6}
            blur={2.6}
            far={3}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
