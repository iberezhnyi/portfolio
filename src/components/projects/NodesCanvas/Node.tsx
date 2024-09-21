'use client'

import * as THREE from 'three'
import {
  useMemo,
  useState,
  useContext,
  useLayoutEffect,
  forwardRef,
  useEffect,
} from 'react'
import { useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useDrag } from '@use-gesture/react'
import Circle from './Circle'
import { context } from './Nodes'
import { useMediaQuery } from 'react-responsive'

// Типизация для Node компонента
interface NodeProps {
  color?: string
  name?: string
  connectedTo?: React.RefObject<THREE.Mesh>[]
  position?: [number, number, number]
  [key: string]: any
}

const Node = forwardRef<THREE.Mesh, NodeProps>(
  (
    { color = 'black', name, connectedTo = [], position = [0, 0, 0], ...props },
    ref,
  ) => {
    const isXS = useMediaQuery({ minWidth: 480, maxWidth: 639 })
    const setNodes = useContext(context)
    const { size, camera } = useThree()
    const [pos, setPos] = useState(() => new THREE.Vector3(...position))
    const state = useMemo(
      () => ({ position: pos, connectedTo }),
      [pos, connectedTo],
    )

    useLayoutEffect(() => {
      if (setNodes) {
        setNodes((nodes) => [...nodes, state])
        return () => {
          setNodes((nodes) => nodes.filter((n) => n !== state))
        }
      }
    }, [state, setNodes])

    const [hovered, setHovered] = useState(false)
    useEffect(() => {
      document.body.style.cursor = hovered ? 'grab' : 'auto'
    }, [hovered])

    // const bind = useDrag(({ down, xy: [x, y] }) => {
    //   document.body.style.cursor = down ? 'grabbing' : 'grab'
    //   setPos(
    //     new THREE.Vector3(
    //       (x / size.width) * 2 - 1,
    //       -(y / size.height) * 2 + 1,
    //       0,
    //     )
    //       .unproject(camera)
    //       .multiply(new THREE.Vector3(1, 1, 0))
    //       .clone(),
    //   )
    // })

    const bind = useDrag(({ down, xy: [x, y] }) => {
      document.body.style.cursor = down ? 'grabbing' : 'grab'

      // Получаем размеры и положение канваса
      const canvas = document.querySelector('canvas') as HTMLCanvasElement
      const rect = canvas.getBoundingClientRect()

      // Координаты мыши относительно канваса
      const adjustedX = (x - rect.left) / rect.width
      const adjustedY = (y - rect.top) / rect.height

      setPos(
        new THREE.Vector3(
          adjustedX * 2 - 1, // Преобразование координат в диапазон [-1, 1]
          -(adjustedY * 2 - 1),
          0,
        )
          .unproject(camera)
          .multiply(new THREE.Vector3(1, 1, 0))
          .clone(),
      )
    })

    return (
      <Circle
        ref={ref}
        {...bind()}
        opacity={0.2}
        radius={0.15}
        color={color}
        position={pos}
        {...props}
      >
        <Circle
          radius={0.1}
          position={[0, 0, 0.1]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          color={hovered ? '#3d4bb7' : color}
        >
          <Text position={[0, 0.3, 1]} fontSize={isXS ? 0.13 : 0.16}>
            {name}
          </Text>
        </Circle>
      </Circle>
    )
  },
)

Node.displayName = 'Node'

export default Node
