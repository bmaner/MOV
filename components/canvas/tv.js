import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

const args = [6, 4, 0.5];

const Tv = () => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/Sequence.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  const [clicked, setClicked] = useState(false);

  useEffect(() => void (clicked && video.play()), [video, clicked]);
  const position = [10, 5, 19.5];

  const [ref] = useBox(() => ({
    type: "Static",
    args: args,
    position: position,
    rotation: [0, Math.PI, 0],
  }));

  return (
    <>
      <mesh ref={ref} castShadow={true} receiveShadow={true}>
        <meshPhongMaterial attachArray="material" color="white" />
        <meshPhongMaterial attachArray="material" color="white" />
        <meshPhongMaterial attachArray="material" color="white" />
        <meshPhongMaterial attachArray="material" color="white" />
        <meshBasicMaterial attachArray="material" toneMapped={false}>
          <videoTexture
            attach="map"
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
        <meshPhongMaterial attachArray="material" color="white" />
        <boxBufferGeometry attach="geometry" args={args} />
      </mesh>
      <Text
        castShadow
        receiveShadow
        onClick={() => setClicked(true)}
        position={[position[0], position[1], position[2] - 0.3]}
        rotation={[0, Math.PI, 0]}
        fontSize={1}
        letterSpacing={-0.06}
        color={"white"}
        strokeColor={"white"}
        outlineColor={"white"}
      >
        click!
      </Text>
    </>
  );
};
export default Tv;
