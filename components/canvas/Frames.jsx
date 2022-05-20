import { useCursor, Image, Text } from "@react-three/drei";
import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const images = [
  {
    position: [-14.49, 5, -15],
    rotation: [0, Math.PI / 2, 0],
    url: "/1.jpeg",
    scale: [1, 1, 1],
  },
  {
    position: [-14.49, 5, -10],
    rotation: [0, Math.PI / 2, 0],
    url: "/2.jpeg",
    scale: [1, 1, 1],
  },
  {
    position: [-14.49, 5, -5],
    rotation: [0, Math.PI / 2, 0],
    url: "/3.jpeg",
    scale: [1, 1, 1],
  },
  {
    position: [-9, 5, -0.5],
    rotation: [0, -Math.PI, 0],
    url: "/4.jpeg",
    scale: [1, 1, 1],
  },
  {
    position: [4.4, 5, 7],
    rotation: [0, -Math.PI / 2, 0],
    url: "/5.jpeg",
    scale: [2, 2, 2],
  },
  {
    position: [14.4, 6.5, -4],
    rotation: [0, -Math.PI / 2, 0],
    url: "/6.jpeg",
    scale: [1, 1, 1],
  },
  {
    position: [4.5, 6.5, -12.5],
    rotation: [0, -Math.PI / 2, 0],
    url: "/7.jpeg",
    scale: [1, 1, 1],
  },
  {
    position: [4.5, 6.5, -16.5],
    rotation: [0, -Math.PI / 2, 0],
    url: "/8.jpeg",
    scale: [1, 1, 1],
  },
];

export default function Frames() {
  return (
    <group>
      {images.map(
        (props) => <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const GOLDENRATIO = 1.61803398875;
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const image = useRef();
  const frame = useRef();
  useCursor(hovered);
  useFrame((state) => {
    image.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    image.current.scale.x = THREE.MathUtils.lerp(
      image.current.scale.x,
      0.85 * (hovered ? 0.85 : 1),
      0.1
    );
    image.current.scale.y = THREE.MathUtils.lerp(
      image.current.scale.y,
      0.9 * (hovered ? 0.905 : 1),
      0.1
    );
  });
  return (
    <group {...props} scale={props.scale}>
      <mesh
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[3, 3, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.8}
          roughness={0.9}
          envMapIntensity={2}
        />
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
    </group>
  );
}
