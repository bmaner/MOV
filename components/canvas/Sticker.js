import { Html, useCursor } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { stickerData } from "../../libs/client/data";

export default function Stickers() {
  return (
    <>
      {stickerData.map((sticker, idx) => {
        return (
          <Sticker
            key={sticker.url}
            idx={idx}
            url={sticker.url}
            position={sticker.position}
            rotation={sticker.rotation}
          />
        );
      })}
      <Html
        position={[13, 5, -13]}
        rotation={[0, -Math.PI / 2, 0]}
        transform
        sprite
        occlude
      >
        <div className="annotation">
          sticker<span style={{ fontSize: "1.5em" }}>🐻</span>
        </div>
      </Html>
    </>
  );
}

function Sticker({ idx, url, position, rotation }) {
  const mesh = useRef();
  const [hovered, hover] = useState(false);
  const front = useLoader(TextureLoader, url);

  useFrame(() => {
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      hovered ? 13 : 13.1,
      0.2
    );
  });
  useCursor(hovered);
  return (
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
      <meshPhongMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" map={front} />
      <meshBasicMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" color="white" />
      <boxBufferGeometry attach="geometry" args={[0.4, 0.005, 1]} />
    </mesh>
  );
}