import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useStore } from "../../helpers/store";
import { cls } from "../../libs/client/utils";
import { Physics } from "@react-three/cannon";

const LCanvas = ({ children }) => {
  return (
    <Canvas
      mode="concurrent"
      dpr={[1, 2]}
      shadows
      camera={{ near: 0.01, far: 110, fov: 30 }}
    >
      <Preload all />
      <Physics gravity={[0, -30, 0]}>{children}</Physics>
    </Canvas>
  );
};

export default LCanvas;
