"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useMemo } from "react";
import Crystal from "./Crystal";

// if give more time, add more colors and maybe a toggle for random vs sequential color changes
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

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export default function CrystalScene() {
  const [index, setIndex] = useState(0);
  const currentColor = GEM_COLORS[index];

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % GEM_COLORS.length);
  };

  // 🔥 dynamic gradient
  const background = useMemo(() => {
    const light = adjustColor(currentColor, 120); // lighter center
    const dark = adjustColor(currentColor, -80); // darker edges

    return `radial-gradient(circle at center, ${light} 0%, ${dark} 100%)`;
  }, [currentColor]);

  return (
    <div className="relative h-screen w-full" style={{ background }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.7} />

        <directionalLight position={[0, 0, 5]} intensity={3} />
        <pointLight position={[5, 5, 5]} intensity={2} />

        <Environment preset="city" environmentIntensity={2} />

        <Crystal color={currentColor} onClick={handleClick} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
