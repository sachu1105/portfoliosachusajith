"use client";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Crystal() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const isDraggingRef = useRef(false);
  const dragPointerIdRef = useRef<number | null>(null);
  const velocityRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef(new THREE.Vector2(0.5, 0.5));

  const { geometry, edgeGeo } = useMemo(() => {
    // Start from a more organic base
    const base = new THREE.IcosahedronGeometry(1.2, 1); // better than cube
    const pos = base.attributes.position;
  
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
  
      // 👉 Crystal elongation (vertical growth like quartz)
      y *= 1.6;
  
      // 👉 Directional faceting (not random noise)
      const angle = Math.atan2(z, x);
      const radius = Math.sqrt(x * x + z * z);
  
      // Create angular cuts (like crystal faces)
      const facet = Math.sin(angle * 6) * 0.15;
  
      const newRadius = radius + facet;
  
      x = Math.cos(angle) * newRadius;
      z = Math.sin(angle) * newRadius;
  
      // 👉 Slight vertical taper (pointy top)
      const taper = 1 - (y * 0.15);
      x *= taper;
      z *= taper;
  
      pos.setXYZ(i, x, y, z);
    }
  
    const faceted = base.toNonIndexed();
    faceted.computeVertexNormals();
  
    const edgeGeo = new THREE.EdgesGeometry(faceted, 10);
  
    return { geometry: faceted, edgeGeo };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!isDraggingRef.current) {
      // subtle idle response when not dragging
      targetRotationRef.current.x = 0.45 + state.pointer.y * 0.2;
      targetRotationRef.current.y = 0.45 + state.pointer.x * 0.28;
    }

    // keep small inertia after release
    targetRotationRef.current.x += velocityRef.current.x;
    targetRotationRef.current.y += velocityRef.current.y;
    velocityRef.current.x *= 0.92;
    velocityRef.current.y *= 0.92;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotationRef.current.x,
      6,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotationRef.current.y,
      6,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      0,
      8,
      delta
    );
  });

  const onPointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    isDraggingRef.current = true;
    dragPointerIdRef.current = event.pointerId;
    (event.target as Element).setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDraggingRef.current || dragPointerIdRef.current !== event.pointerId) return;
    event.stopPropagation();

    const moveX = event.movementX * 0.0035;
    const moveY = event.movementY * 0.0035;
    targetRotationRef.current.y += moveX;
    targetRotationRef.current.x += moveY;
    velocityRef.current.x = moveY * 0.45;
    velocityRef.current.y = moveX * 0.45;
  };

  const releaseDrag = (event: ThreeEvent<PointerEvent>) => {
    if (dragPointerIdRef.current !== event.pointerId) return;
    event.stopPropagation();
    isDraggingRef.current = false;
    dragPointerIdRef.current = null;
    (event.target as Element).releasePointerCapture(event.pointerId);
  };

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} rotation={[0.5, 0.5, 0]}>
        
        {/* Inner Core: A sharp, metallic geometric element looks best inside a cube */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={1} 
            roughness={0.1} 
          />
        </mesh>

        

        {/* Outer Glass Cube */}
        <mesh
          ref={meshRef}
          geometry={geometry}
          castShadow
          receiveShadow
          scale={0.65}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={releaseDrag}
          onPointerOut={releaseDrag}
          onPointerMissed={() => {
            isDraggingRef.current = false;
            dragPointerIdRef.current = null;
          }}
        >
          <MeshTransmissionMaterial
            transmission={1.0}      // Full transmission for maximum glassy effect
            thickness={2.2}         // Heavy thickness for deep refractions
            roughness={0.08}        // Very low roughness for a polished, sharp look
            ior={1.55}              // 1.55 is roughly the IOR of quartz/flint glass
            chromaticAberration={0.08} // High chromatic aberration for rainbow edges
            anisotropy={0.2}
            distortion={0.15}       // Slight distortion bends the inner octahedron
            distortionScale={0.4}
            temporalDistortion={0}
            clearcoat={1}
            clearcoatRoughness={0.05}
            attenuationDistance={2.5}
            attenuationColor="#ffffff"
            color="#dbeaf5"         // Crisp, clean icy blue
            backside
            backsideThickness={1.5}
            samples={16}
            resolution={1024}
            envMapIntensity={2.5}   // Blast the environment reflections to catch the hard edges
          />
        </mesh>

        {/* Clean, high-tech wireframe */}
        <lineSegments ref={edgesRef} geometry={edgeGeo}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
        </lineSegments>
      </group>
    </Float>
  );
}