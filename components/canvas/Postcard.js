import { postcardData } from "../../libs/client/data";
import { Html, useCursor } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
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
  const front = useLoader(TextureLoader, url);
  const back = useLoader(
    TextureLoader,
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
    mesh.current.rotation.z = Math.PI * 2 * (idx / length) + t / 10;
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
      rotation={[Math.PI / 2, Math.PI, Math.PI * 2 * (idx / length)]}
      onClick={() =>
        window.open("https://www.wishbearland.com/stickers", "_blank")
      }
    >
      <meshPhongMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" map={back} />
      <meshPhongMaterial attachArray="material" map={front} />
      <meshBasicMaterial attachArray="material" color="white" />
      <meshPhongMaterial attachArray="material" color="white" />
      <boxBufferGeometry
        attach="geometry"
        args={type === "col" ? [0.5, 0.001, 0.75] : [0.75, 0.001, 0.5]}
      />
    </mesh>
  );
}
