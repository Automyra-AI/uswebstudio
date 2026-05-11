"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Hero3DScene — refined glass/distort focal piece for the home hero.
 * Two layers:
 *   • A large distorted glass icosahedron (the "lab") with subtle red tint.
 *   • A small orbiting ring/sphere for visual rhythm.
 *
 * Camera subtly tracks the cursor for a premium feel.
 */

function CameraRig() {
  useFrame((state) => {
    const { mouse, camera } = state;
    // Subtle, eased follow — never lets camera get jittery
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function GlassObject() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.9}>
      <mesh ref={ref} castShadow>
        <icosahedronGeometry args={[1.6, 6]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={512}
          transmission={1}
          thickness={1.2}
          roughness={0.05}
          ior={1.35}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.25}
          distortionScale={0.4}
          temporalDistortion={0.05}
          color="#ffffff"
          attenuationColor="#e11d2a"
          attenuationDistance={2.4}
        />
      </mesh>
    </Float>
  );
}

function AccentBlob() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.x = Math.cos(t * 0.4) * 2.6;
    ref.current.position.y = Math.sin(t * 0.4) * 1.6;
    ref.current.position.z = Math.sin(t * 0.3) * 0.8;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial
        color="#e11d2a"
        emissive="#7a0e16"
        emissiveIntensity={0.6}
        roughness={0.25}
        metalness={0.1}
      />
    </mesh>
  );
}

function SoftRing() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.z += delta * 0.05;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[2.4, 0.012, 64, 256]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.18}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function Hero3DScene({ className = "" }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <CameraRig />

          <ambientLight intensity={0.35} />
          <directionalLight
            position={[3, 3.5, 3]}
            intensity={1.1}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight
            position={[-3, -2, -1]}
            intensity={0.4}
            color="#1f7da6"
          />
          <pointLight position={[2.5, -1, 1]} intensity={0.7} color="#e11d2a" />

          <Environment preset="city" />

          <GlassObject />
          <SoftRing />
          <AccentBlob />

          <ContactShadows
            position={[0, -1.9, 0]}
            opacity={0.4}
            scale={6}
            blur={2.4}
            far={3}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
