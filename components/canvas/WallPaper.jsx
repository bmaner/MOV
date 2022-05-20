import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

const WallPaper = ({ position, rotation, args, set1, set2, url, ...props }) => {
  const texture = useTexture(url);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(set1, set2);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    rotation,
    args: args,
    ...props,
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};
export default WallPaper;
