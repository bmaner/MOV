import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

const Floor = (props) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  const texture = useTexture("/wood.png");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(3, 5);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeBufferGeometry attach="geometry" args={[30, 40]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};
export default Floor;
