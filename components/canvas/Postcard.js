import { postcardData } from "../../libs/client/data";
import { Html, useCursor, useTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Postcards() {
  return (
    <>
      {postcardData.map((postcard, idx) => {
        return (
          <Postcard
            key={postcard.url}
            idx={idx}
            url={postcard.url}
            type={postcard.type}
            length={postcardData.length}
          />
        );
      })}
      <Html
        position={[10, 3, -5]}
        rotation={[0, -Math.PI / 2, 0]}
        transform
        sprite
        occlude
      >
        <div className="annotation">
          postcard<span style={{ fontSize: "1.5em" }}>✉️</span>
        </div>
      </Html>
    </>
  );
}

function Postcard({ idx, url, type, length }) {
  const mesh = useRef();
  const [hovered, hover] = useState(false);
  const front = useTexture(url);
  const back = useTexture(
    type === "row"
      ? "/postcards/postcard_back_row.png"
      : "/postcards/postcard_back_col.png"
  );
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.set(
      Math.sin(Math.PI * 2 * (idx / length) + t / 10) * 2 + 10,
      mesh.current.position.y,
      Math.cos(Math.PI * 2 * (idx / length) + t / 10) * 2 - 5
    );
    mesh.current.rotation.y = Math.PI * 2 * (idx / length) + t / 10;
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      hovered ? 2.1 : 2,
      0.1
    );
  });
  useCursor(hovered);
  return (
    <mesh
      ref={mesh}
      onPointerOver={(e) => (e.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
      position={[
        Math.sin(Math.PI * 2 * (idx / length)) * 2 + 10,
        2,
        Math.cos(Math.PI * 2 * (idx / length)) * 2 - 5,
      ]}
      rotation={[0, Math.PI * 2 * (idx / length), 0]}
      onClick={() =>
        window.open("https://www.wishbearland.com/stickers", "_blank")
      }
    >
      <meshPhongMaterial
        attachArray="material"
        map={front}
        side={THREE.DoubleSide}
      />
      <planeBufferGeometry
        attach="geometry"
        args={type === "col" ? [0.5, 0.75] : [0.75, 0.5]}
      />
    </mesh>
  );
}
