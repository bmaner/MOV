import { useBox } from "@react-three/cannon";

const CenterSeperationWall = ({ position, rotation, longer, ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    rotation,
    args: [longer ? 14 : 10.5, 10, 1],
    ...props,
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[longer ? 14 : 10.5, 10, 1]} />
      <meshPhongMaterial color={"white"} />
    </mesh>
  );
};
export default CenterSeperationWall;
