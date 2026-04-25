"use client";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Crystal({
  color,
  onClick,
}: {
  color: string;
  onClick?: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const rotationRef = useRef(new THREE.Vector2(0.3, 0.5));

  const geometry = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(1.2, 1);
    const pos = base.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      y *= 1.6;

      const angle = Math.atan2(z, x);
      const radius = Math.sqrt(x * x + z * z);
      const facet = Math.sin(angle * 6) * 0.12;

      const newRadius = radius + facet;
      x = Math.cos(angle) * newRadius;
      z = Math.sin(angle) * newRadius;

      const taper = 1 - y * 0.15;
      x *= taper;
      z *= taper;

      pos.setXYZ(i, x, y, z);
    }

    const faceted = base.toNonIndexed();
    faceted.computeVertexNormals();
    return faceted;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    rotationRef.current.y += delta * 0.15;

    groupRef.current.rotation.y = rotationRef.current.y;
    groupRef.current.rotation.x = rotationRef.current.x;
  });

  return (
    <Float rotationIntensity={0} floatIntensity={0.4}>
      <group ref={groupRef}>
        <mesh geometry={geometry} scale={0.6} onClick={onClick}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={0.4}
            roughness={0.02}
            ior={1.45}
            chromaticAberration={0.02}
            color={color}
            backside
            samples={8}
            envMapIntensity={6}
          />
        </mesh>
      </group>
    </Float>
  );
}
