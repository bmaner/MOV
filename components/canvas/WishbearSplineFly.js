/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const environment = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/wishbearSplineFly.glb");
  const { actions } = useAnimations(animations, group);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  const position = [2.5, 7, 1];
  useEffect(() => {
    void mixer.clipAction(animations[0], group.current).play();
  });
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t) / 1.5 + Math.PI / 2,
      0.4
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.cos(t) / 2 + 0.25,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.cos(t) / 2 + 0.25 + 6,
      0.1
    );
    environment.current.rotation.y -=
      Math.sin((delta * 0.5) / 2) * Math.cos((delta * 0.5) / 2) * 1.2;

    mixer.update(delta * 0.7);
  });
  return (
    <group ref={environment} position={[-6, 0.5, 11]}>
      <group
        ref={group}
        {...props}
        dispose={null}
        position={position}
        scale={0.025}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <group name="Scene">
          <group name="Node_0" position={[0, 2.12, 0]} scale={0.1}>
            <group
              name="Arms"
              position={[1.75, 216.48, 86.5]}
              rotation={[-2.07, 0, 0]}
            >
              <mesh
                name="Cube_8"
                geometry={nodes.Cube_8.geometry}
                material={materials.Skin}
                position={[-33.31, 127.49, -17.76]}
                rotation={[-2.41, 0.44, -Math.PI / 2]}
              />
              <mesh
                name="Cube_9"
                geometry={nodes.Cube_9.geometry}
                material={materials.Skin}
                position={[32.37, 130.38, -16.85]}
                rotation={[-2.9, -0.44, -Math.PI / 2]}
              />
            </group>
            <group
              name="Body"
              position={[0, 101.45, -15.14]}
              scale={[0.84, 0.91, 1]}
            >
              <mesh
                name="Tail"
                geometry={nodes.Tail.geometry}
                material={materials.Skin}
                position={[-1.95, -23.88, -69.36]}
                rotation={[-2.4, 0, -Math.PI / 2]}
              />
              <mesh
                name="Toros"
                geometry={nodes.Toros.geometry}
                material={materials.Skin}
                position={[0, 8.58, 4.54]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.91, 1.05, 1]}
              />
            </group>
            <group
              name="Head"
              position={[0, 199.98, 0]}
              rotation={[0.17, 0, 0]}
              scale={[1, 1, 0.96]}
            >
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.Skin}
                position={[0.63, -21.16, -10.76]}
              />
              <mesh
                name="Cube_2"
                geometry={nodes.Cube_2.geometry}
                material={materials.Skin}
                position={[30.33, 12.78, -29.78]}
                rotation={[-1.84, 0.28, -1.6]}
                scale={[0.78, 1.03, 0.99]}
              />
              <mesh
                name="Cube_3"
                geometry={nodes.Cube_3.geometry}
                material={materials.Skin}
                position={[-32.01, 11.32, -29.37]}
                rotation={[-1.84, -0.2, -1.57]}
                scale={[0.78, 1.03, 0.99]}
              />
              <mesh
                name="Cube_4"
                geometry={nodes.Cube_4.geometry}
                material={materials.Eye}
                position={[11.04, 11.3, 22.05]}
                rotation={[-2.44, 0.03, -1.55]}
                scale={[0.43, 0.57, 0.44]}
              />
              <mesh
                name="Cube_5"
                geometry={nodes.Cube_5.geometry}
                material={materials.Eye}
                position={[-7.66, 11.3, 22.05]}
                rotation={[-2.44, 0.03, -1.55]}
                scale={[0.43, 0.57, 0.44]}
              />
              <mesh
                name="Cube_6"
                geometry={nodes.Cube_6.geometry}
                material={materials.Eye}
                position={[1.73, 8.62, 54.6]}
                rotation={[-0.9, 0, -Math.PI / 2]}
                scale={[0.98, 1, 1]}
              />
            </group>
            <group
              name="Legs"
              position={[1.95, 31.23, -6.45]}
              scale={[1.08, 0.99, 1.17]}
            >
              <mesh
                name="Cube_10"
                geometry={nodes.Cube_10.geometry}
                material={materials.Skin}
                position={[-27.74, 39.29, -6.36]}
                rotation={[-1.74, 0, -Math.PI / 2]}
              />
              <mesh
                name="Cube_11"
                geometry={nodes.Cube_11.geometry}
                material={materials.Skin}
                position={[24.4, 39.13, -6.36]}
                rotation={[-1.21, 0, -Math.PI / 2]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/wishbearSplineFly.glb");
