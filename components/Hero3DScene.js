"use client";

import { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  MeshDistortMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/**
 * Hero3DScene — self-illuminated premium sculpture.
 *
 * Why no Environment? On a dark hero, a chrome/glass sphere reads as
 * a black orb regardless of HDR choice. We use a glowing emissive
 * distorted form + wireframe shell instead — always visible, no
 * environment dependency, signature look.
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
    const targetZ = 5 + s * 0.5;

    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.position.z += (targetZ - camera.position.z) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function GlowSculpture() {
  const ref = useRef();
  const wireRef = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.18;
      ref.current.rotation.x += delta * 0.07;
    }
    if (wireRef.current) {
      // Counter-rotate wireframe for visual depth
      wireRef.current.rotation.y -= delta * 0.08;
      wireRef.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.7}>
      {/* Solid glowing core — distorted icosahedron */}
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.45, 64]} />
        <MeshDistortMaterial
          color="#1a0f3a"
          emissive="#e11d2a"
          emissiveIntensity={0.55}
          distort={0.42}
          speed={1.8}
          roughness={0.25}
          metalness={0.55}
        />
      </mesh>

      {/* Wireframe shell — technical agency overlay */}
      <mesh ref={wireRef} scale={1.08}>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Inner bright pulse — picks up bloom */}
      <mesh scale={0.55}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ff4252" transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

function GlowSatellite() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const r = 2.7;
    ref.current.position.x = Math.cos(t * 0.45) * r;
    ref.current.position.y = Math.sin(t * 0.35) * 1.2;
    ref.current.position.z = Math.sin(t * 0.5) * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.13, 32, 32]} />
      <meshStandardMaterial
        color="#ff5267"
        emissive="#e11d2a"
        emissiveIntensity={5}
        toneMapped={false}
      />
    </mesh>
  );
}

function ThinRing() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.06;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0.2]}>
      <torusGeometry args={[2.45, 0.005, 32, 256]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
    </mesh>
  );
}

function Particles({ count = 120 }) {
  const ref = useRef();
  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 2.8 + Math.random() * 2.6;
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
      const drift = Math.sin(t * 0.45 + randoms[i] * Math.PI * 2) * 0.06;
      arr[base + 1] = positions[base + 1] + drift;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y += 0.0008;
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
        size={0.024}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.7}
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
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 36 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop="always"
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <CameraRig />

          {/* Strong directional lighting — chrome won't dominate anymore */}
          <ambientLight intensity={0.55} />
          <directionalLight position={[3, 4, 3]} intensity={1.3} color="#ffffff" />
          <directionalLight position={[-3, -1.5, -1]} intensity={0.45} color="#7fa6cf" />
          <pointLight position={[2.5, -1, 2]} intensity={1.4} color="#e11d2a" />
          <pointLight position={[-2.5, 2, 1]} intensity={0.7} color="#9bb6c9" />

          {/* No Environment — material is self-illuminated */}

          <GlowSculpture />
          <ThinRing />
          <GlowSatellite />
          <Particles count={120} />

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
              intensity={1.2}
              luminanceThreshold={0.45}
              luminanceSmoothing={0.65}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
