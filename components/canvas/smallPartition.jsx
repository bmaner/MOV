import { useBox } from "@react-three/cannon";

const SmallPartition = ({ position, rotation, ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    rotation,
    args: [3, 10, 1],
    ...props,
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[3, 10, 1]} />
      <meshPhongMaterial color={"white"} />
    </mesh>
  );
};
export default SmallPartition;
