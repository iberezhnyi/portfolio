import { FC, ReactNode, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import SceneCleanup from '../common/SceneCleanup'

interface BallCanvasProps {
  children: ReactNode
}

const BallCanvas: FC<BallCanvasProps> = ({ children }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '130px', height: '130px' }}
    >
      <Suspense
        fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="gray" />
          </mesh>
        }
      >
        <OrbitControls enableZoom={false} />
        {children}
      </Suspense>

      <SceneCleanup />
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
