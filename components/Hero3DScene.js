"use client";

import { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  MeshDistortMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/**
 * Hero3DScene — premium liquid-chrome focal piece.
 *
 * Composition:
 *   • A distorted high-poly icosahedron rendered as liquid chrome — uses
 *     MeshDistortMaterial (extends MeshPhysicalMaterial) so the surface
 *     ripples like mercury while reflecting the studio HDR.
 *   • A small emissive red satellite orbiting on a tilted path.
 *   • A drifting 3D particle field for atmosphere.
 *   • Bloom post-processing lifts the satellite glow + chrome highlights.
 *   • Camera responds to mouse + scroll for a cinematic feel.
 */

function CameraRig() {
  const scrollRef = useRef(0);

  useEffect(() => {
    function onScroll() {
      const max = Math.max(1, window.innerHeight * 2);
      scrollRef.current = Math.min(1, window.scrollY / max);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    const { mouse, camera, clock } = state;
    const t = clock.getElapsedTime();
    const s = scrollRef.current;

    const targetX = mouse.x * 0.5 + Math.sin(t * 0.12) * 0.08;
    const targetY =
      -mouse.y * 0.3 + Math.cos(t * 0.1) * 0.06 - s * 0.6;
    const targetZ = 5.2 + s * 0.5;

    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.position.z += (targetZ - camera.position.z) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function LiquidChrome() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.07;
    ref.current.rotation.x += delta * 0.025;
  });

  return (
    <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.55}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.55, 64]} />
        <MeshDistortMaterial
          color="#0b1230"
          attach="material"
          distort={0.38}
          speed={1.4}
          roughness={0.05}
          metalness={1}
          envMapIntensity={1.4}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

function GlowSatellite() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const r = 2.6;
    ref.current.position.x = Math.cos(t * 0.45) * r;
    ref.current.position.y = Math.sin(t * 0.35) * 1.1;
    ref.current.position.z = Math.sin(t * 0.5) * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.14, 32, 32]} />
      <meshStandardMaterial
        color="#ff5267"
        emissive="#e11d2a"
        emissiveIntensity={4.5}
        toneMapped={false}
      />
    </mesh>
  );
}

function ThinRing() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.05;
    ref.current.rotation.x += delta * 0.018;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0.18]}>
      <torusGeometry args={[2.45, 0.006, 32, 256]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.28}
        roughness={0.3}
        metalness={0.8}
        toneMapped={false}
      />
    </mesh>
  );
}

function Particles({ count = 110 }) {
  const ref = useRef();
  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 2.8 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      randoms[i] = Math.random();
    }
    return { positions, randoms };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const base = i * 3;
      const drift = Math.sin(t * 0.4 + randoms[i] * Math.PI * 2) * 0.06;
      arr[base + 1] = positions[base + 1] + drift;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y += 0.0006;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3DScene({ className = "" }) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) {
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center ${className}`}
      >
        <div
          className="w-72 h-72 lg:w-96 lg:h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6) 0%, rgba(225,29,42,0.5) 35%, rgba(15,25,55,0.9) 75%)",
            boxShadow: "0 0 120px 20px rgba(225,29,42,0.18)",
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.2], fov: 36 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <CameraRig />

          {/* Studio three-point lighting */}
          <ambientLight intensity={0.45} />
          <directionalLight
            position={[3.5, 4, 3]}
            intensity={1.6}
            color="#ffffff"
          />
          <directionalLight
            position={[-3, -1.5, -1]}
            intensity={0.55}
            color="#7fa6cf"
          />
          <pointLight position={[2.5, -1, 2]} intensity={1} color="#e11d2a" />
          <pointLight
            position={[-2.5, 2, 1]}
            intensity={0.55}
            color="#9bb6c9"
          />

          {/* Brighter environment for chrome reflections */}
          <Environment preset="studio" />

          <LiquidChrome />
          <ThinRing />
          <GlowSatellite />
          <Particles count={110} />

          <ContactShadows
            position={[0, -2.1, 0]}
            opacity={0.4}
            scale={6}
            blur={2.8}
            far={3}
            color="#000000"
          />

          <EffectComposer multisampling={4}>
            <Bloom
              intensity={1.1}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.6}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
