import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Box({ z, ...props }) {
  const [vec] = useState(() => new THREE.Vector3());
  const { nodes, materials } = useGLTF("/wishbearSpline.glb");
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(viewport.height * 10),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.005),
      (data.rY += 0.005),
      (data.rZ += 0.005)
    );
    ref.current.position.set(data.x * width, (data.y += 0.01), z + 5);
    if (data.y > height / 1.01) {
      data.y = -height / 1.01;
    }
  });

  return (
    <group ref={ref} {...props} dispose={null} scale={0.1}>
      <group scale={0.1}>
        <group position={[1.75, 216.48, 86.5]} rotation={[-2.07, 0, 0]}>
          <mesh
            geometry={nodes.Cube_8.geometry}
            material={materials.Skin}
            position={[-58.6, 90.63, -9]}
            rotation={[-1.89, 0.44, -Math.PI / 2]}
          />
          <mesh
            geometry={nodes.Cube_9.geometry}
            material={materials.Skin}
            position={[58.6, 90.63, -9]}
            rotation={[-1.89, -0.44, -Math.PI / 2]}
          />
        </group>
        <group position={[0, 101.45, -15.14]} scale={[0.84, 0.91, 1]}>
          <mesh
            geometry={nodes.Tail.geometry}
            material={materials.Skin}
            position={[-1.95, -23.88, -69.36]}
            rotation={[-2.4, 0, -Math.PI / 2]}
          />
          <mesh
            geometry={nodes.Toros.geometry}
            material={materials.Skin}
            position={[0, 8.58, 4.54]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.91, 1.05, 1]}
          />
        </group>
        <group
          position={[0, 199.98, 0]}
          rotation={[0.17, 0, 0]}
          scale={[1, 1, 0.96]}
        >
          <mesh
            geometry={nodes.Cube.geometry}
            material={materials.Skin}
            position={[0.63, -21.16, -10.76]}
          />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={materials.Skin}
            position={[30.33, 12.78, -29.78]}
            rotation={[-1.84, 0.28, -1.6]}
            scale={[0.78, 1.03, 0.99]}
          />
          <mesh
            geometry={nodes.Cube_3.geometry}
            material={materials.Skin}
            position={[-32.01, 11.32, -29.37]}
            rotation={[-1.84, -0.2, -1.57]}
            scale={[0.78, 1.03, 0.99]}
          />
          <mesh
            geometry={nodes.Cube_4.geometry}
            material={materials.Eye}
            position={[11.04, 11.3, 22.05]}
            rotation={[-2.44, 0.03, -1.55]}
            scale={[0.43, 0.57, 0.44]}
          />
          <mesh
            geometry={nodes.Cube_5.geometry}
            material={materials.Eye}
            position={[-7.66, 11.3, 22.05]}
            rotation={[-2.44, 0.03, -1.55]}
            scale={[0.43, 0.57, 0.44]}
          />
          <mesh
            geometry={nodes.Cube_6.geometry}
            material={materials.Eye}
            position={[1.73, 8.62, 54.6]}
            rotation={[-0.9, 0, -Math.PI / 2]}
            scale={[0.98, 1, 1]}
          />
        </group>
        <group position={[1.95, 31.23, -6.45]} scale={[1.08, 0.99, 1.17]}>
          <mesh
            geometry={nodes.Cube_10.geometry}
            material={materials.Skin}
            position={[-25.92, -10.62, -6.36]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            geometry={nodes.Cube_11.geometry}
            material={materials.Skin}
            position={[26.23, -10.62, -6.36]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/wishbearSpline.glb");

export default function WishBears() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.7} />
      <group scale={0.5}>
        {Array.from({ length: 200 }, (_, i) => (
          <Box key={i} z={-i} />
        ))}
      </group>
      <Environment preset="lobby" />
      <Bg />
    </Suspense>
  );
}

function Bg() {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x =
      mesh.current.rotation.z =
      mesh.current.rotation.y +=
        delta * 0.1;
  });
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 100, 100]} />
      <MeshReflectorMaterial
        attach="material"
        side={THREE.BackSide}
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={1}
        roughness={0.1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#d6c2ad"
        metalness={0.5}
      />
    </mesh>
  );
}
