import { Html, useCursor, useTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { polaroidData } from "../../libs/client/data";

export default function Polaroids() {
  return (
    <>
      {polaroidData.map((polaroid, idx) => {
        return (
          <Polaroid
            key={polaroid.url}
            idx={idx}
            url={polaroid.url}
            position={polaroid.position}
            rotation={polaroid.rotation}
          />
        );
      })}
      <Html
        position={[6.5, 5, -13]}
        rotation={[0, -Math.PI / 2, 0]}
        transform
        sprite
        occlude
      >
        <div className="annotation">
          Polaroid<span style={{ fontSize: "1.5em" }}>📷</span>
        </div>
      </Html>
    </>
  );
}

function Polaroid({ idx, url, position, rotation }) {
  const mesh = useRef();
  const [hovered, hover] = useState(false);
  const texture = useTexture(url);
  useFrame(() => {
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      hovered ? 6.6 : 6.5,
      0.2
    );
  });
  useCursor(hovered);
  return (
    <>
      <mesh
        ref={mesh}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        position={position}
        rotation={rotation}
        onClick={() =>
          window.open("https://www.wishbearland.com/stickers", "_blank")
        }
      >
        <meshPhongMaterial map={texture} side={THREE.DoubleSide} />
        <planeBufferGeometry attach="geometry" args={[0.76, 1]} />
      </mesh>
    </>
  );
}
