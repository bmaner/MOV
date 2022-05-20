import { useBox } from "@react-three/cannon";

const Wall = ({ position, rotation, longer, ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    rotation,
    args: [50, 10, 1],
    ...props,
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[longer ? 31 : 41, 10, 1]} />

      <meshPhongMaterial />
    </mesh>
  );
};
export default Wall;
