import { useThree } from '@react-three/fiber'
import { FC, useEffect } from 'react'

const SceneCleanup: FC = () => {
  const { gl, scene } = useThree()

  useEffect(() => {
    return () => {
      scene.clear()
      gl.dispose()
    }
  }, [gl, scene])

  return null
}

export default SceneCleanup
