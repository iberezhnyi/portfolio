import { FC } from 'react'
import { Decal, Float, useTexture } from '@react-three/drei'

interface BallProps {
  imgUrl: string
}

const Ball: FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* <ambientLight intensity={0.25} /> */}
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          //   color="#fff8eb"
          color="#3da5b7"
          //   color="#3d4bb7"
          //   color="#1C1C22"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // flatShading
        />
      </mesh>
    </Float>
  )
}

export default Ball
