import { useBox } from "@react-three/cannon";

const Ceil = () => {
  const [ref] = useBox(() => ({
    position: [0, 10.9, 0],
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    args: [30, 40, 1],
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow position={[0, 10.9, 0]}>
      <boxBufferGeometry attach="geometry" args={[31, 41, 1]} />
      <meshBasicMaterial color={"white"} />
    </mesh>
  );
};
export default Ceil;
