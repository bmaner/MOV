import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF("/arch.glb");
  const position = [-14.5, 0.5, 19.5];
  const rotation = [0, Math.PI / 2, 0];
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    rotation,
    args: [15, 10, 0.5],
    ...props,
  }));
  return (
    <group
      castShadow
      receiveShadow
      ref={ref}
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={[0.65, 0.505, 0.5]}
    >
      <mesh
        geometry={nodes.group_1.geometry}
        material={materials.material}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/arch.glb");
