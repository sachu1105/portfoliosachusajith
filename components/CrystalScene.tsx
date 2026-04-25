"use client";
import {
  Environment,
  OrbitControls,
  Html,
  ContactShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useMemo, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Crystal from "./Crystal";

const GEM_COLORS = ["#ffffff"];

function adjustColor(hex: string, amount: number) {
  const col = hex.replace("#", "");
  const num = parseInt(col, 16);

  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0xff) + amount;
  let b = (num & 0xff) + amount;

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  return `#${((r << 16) | (g << 8) | b)
    .toString(16)
    .padStart(6, "0")}`;
}

function CrystalLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center pointer-events-none">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-black/20 border-t-black/80 mb-2"></div>
        <span className="text-xs font-semibold tracking-widest text-black/60 uppercase font-archivo">
          Loading
        </span>
      </div>
    </Html>
  );
}

export default function CrystalScene() {
  const [index, setIndex] = useState(0);
  const currentColor = GEM_COLORS[index];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % GEM_COLORS.length);
  };

  const background = useMemo(() => {
    const light = adjustColor(currentColor, 120);
    const dark = adjustColor(currentColor, -80);
    return `radial-gradient(circle at center, ${light} 0%, ${dark} 100%)`;
  }, [currentColor]);

  return (
    <div ref={ref} className="relative h-screen w-full" style={{ background }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ alpha: true }}
        frameloop={inView ? "always" : "demand"}
      >
        {/* Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[0, 5, 5]}
          intensity={4}
          castShadow
        />
        <pointLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={<CrystalLoader />}>
          <Environment preset="city" environmentIntensity={2.5} />

          {/* Crystal */}
          <Crystal color={currentColor} onClick={handleClick} />

          {/* 🔥 KEY ADDITION: Soft shadow */}
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.5}
            scale={6}
            blur={2.5}
            far={2}
            resolution={1024}
            color="#000000"
          />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}