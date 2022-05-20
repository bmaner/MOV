import * as THREE from 'three'
import { Image, useTexture } from '@react-three/drei'

const TransImagePaper = ({ position, rotation, args, url }) => {
  const texture = useTexture(url)
  return (
    <mesh position={position} rotation={rotation}>
      <planeBufferGeometry args={args} />
      <meshPhongMaterial
        map={texture}
        side={THREE.DoubleSide}
        transparent={true}
        opacity={1}
      />
    </mesh>
  )
}

export default TransImagePaper
