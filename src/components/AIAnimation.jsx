import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Stars,
  Line,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// ==========================
// AI CORE
// ==========================

function AICore() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!mesh.current) return;

    mesh.current.rotation.x = t * 0.25;
    mesh.current.rotation.y = t * 0.45;

    const s = 1 + Math.sin(t * 2) * 0.08;
    mesh.current.scale.set(s, s, s);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.4}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.3, 5]} />

        <meshStandardMaterial
          color="#00ffff"
          emissive="#00bfff"
          emissiveIntensity={3}
          metalness={0.8}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// ==========================
// NEURAL NODES
// ==========================

function NeuralNodes() {
  const group = useRef();

  const nodes = useMemo(() => {
    let arr = [];

    for (let i = 0; i < 120; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 10
        ),
      });
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.045, 16, 16]} />

          <meshBasicMaterial
            color="#00ffff"
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ==========================
// CONNECTION LINES
// ==========================

function Connections() {
  const lines = useMemo(() => {
    let arr = [];

    for (let i = 0; i < 60; i++) {
      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10
      );

      const p2 = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10
      );

      arr.push([p1, p2]);
    }

    return arr;
  }, []);

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#00ffff"
          lineWidth={0.5}
          transparent
          opacity={0.25}
        />
      ))}
    </>
  );
}

// ==========================
// FLOATING PARTICLES
// ==========================

function FloatingParticles() {
  const points = useRef();

  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1500; i++) {
      positions.push(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 40
      );
    }

    return new Float32Array(positions);
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;

    points.current.rotation.y = clock.getElapsedTime() * 0.015;
    points.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#7df9ff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// ==========================
// MOUSE FOLLOW LIGHT
// ==========================

function MouseLight() {
  const light = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!light.current) return;

    light.current.position.x = mouse.x * 6;
    light.current.position.y = mouse.y * 4;
    light.current.position.z = 5;
  });

  return (
    <pointLight
      ref={light}
      color="#00ffff"
      intensity={3}
      distance={25}
    />
  );
}

// ==========================
// MAIN COMPONENT
// ==========================

export default function AIAnimation() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 55,
      }}
    >
      <color attach="background" args={["#020617"]} />

      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#ffffff"
      />

      <pointLight
        position={[-5, -3, 4]}
        intensity={2}
        color="#00bfff"
      />

      <MouseLight />

      <Stars
        radius={120}
        depth={70}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <FloatingParticles />

      <Connections />

      <NeuralNodes />

      <AICore />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}