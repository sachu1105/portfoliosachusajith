"use client";
import { Environment, Line, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import Crystal from "./Crystal";

function ConstellationLines() {
  const lines: [THREE.Vector3, THREE.Vector3][] = useMemo(() => [
    [new THREE.Vector3(-3.2, 1.8, -1),   new THREE.Vector3(-2.1, 0.4, -0.5)],
    [new THREE.Vector3(-2.1, 0.4, -0.5), new THREE.Vector3(-1.4, -0.8, 0)],
    [new THREE.Vector3(-1.4, -0.8, 0),   new THREE.Vector3(-2.6, -1.6, -0.8)],
    [new THREE.Vector3(-2.6, -1.6, -0.8),new THREE.Vector3(-3.4, -0.6, -1.2)],
    [new THREE.Vector3(-3.4, -0.6, -1.2),new THREE.Vector3(-2.1, 0.4, -0.5)],
    [new THREE.Vector3(-1.4, -0.8, 0),   new THREE.Vector3(-0.8, -1.4, 0.2)],
    [new THREE.Vector3(-2.6, -1.6, -0.8),new THREE.Vector3(-1.8, -2.6, -0.4)],
  ], []);

  const dots = useMemo(() => [
    new THREE.Vector3(-3.2, 1.8, -1),
    new THREE.Vector3(-2.1, 0.4, -0.5),
    new THREE.Vector3(-1.4, -0.8, 0),
    new THREE.Vector3(-2.6, -1.6, -0.8),
    new THREE.Vector3(-3.4, -0.6, -1.2),
  ], []);

  return (
    <group>
      {lines.map(([start, end], i) => (
        <Line key={`line-${i}`} points={[start, end]} color="#c8d8e8" lineWidth={0.6} transparent opacity={0.35} />
      ))}
      {dots.map((pos, i) => (
        <mesh key={`dot-${i}`} position={pos}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshBasicMaterial color="#ddeeff" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Stars() {
  const positions = useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    let s = 999;
    const r = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (r() - 0.5) * 18;
      pos[i * 3 + 1] = (r() - 0.5) * 14;
      pos[i * 3 + 2] = (r() - 0.5) * 6 - 4;
    }
    return pos;
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <points geometry={geo}>
      <pointsMaterial color="#c8d8e8" size={0.028} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function CrystalScene() {
  return (
    <div className="relative h-screen w-full" style={{ background: "#bfc9d8" }}>
      <Canvas
        className="h-full w-full"
        dpr={[1, 2]} // Capped at 2 for performance scaling
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{
          antialias: false,
          alpha: false, // Critical for MeshTransmissionMaterial to sample the background correctly
          powerPreference: "high-performance",
        }}
      >
        {/* The scene background must match the DOM background */}
        <color attach="background" args={["#bfc9d8"]} />

        {/* High-contrast lighting setup to emphasize edges and refractions */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, -5, -10]} intensity={1.5} color="#7aafd4" />
        
        {/* Backlight/Rimlight to make the crystal glow from behind */}
        <spotLight 
          position={[0, 5, -5]} 
          intensity={4} 
          angle={0.5} 
          penumbra={1} 
          color="#ffffff" 
        />

        <Environment preset="studio" environmentIntensity={1} />

        <Stars />
        <ConstellationLines />
        <Crystal />

        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.06}
        />
      </Canvas>

      {/* HUD Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ fontFamily: "'Courier New', monospace", letterSpacing: "0.12em" }}
      >
       
      </div>
    </div>
  );
}