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

    // _________________________________________________________________

    // const bind = useDrag(({ down, xy: [x, y], touches }) => {
    //   document.body.style.cursor = down ? 'grabbing' : 'grab'

    //   // Получаем размеры и положение канваса
    //   const canvas = document.querySelector('canvas') as HTMLCanvasElement
    //   const rect = canvas.getBoundingClientRect()

    //   // Для касаний используем touch-корректировку
    //   const isTouch = touches > 0

    //   // Координаты мыши или касания относительно канваса
    //   const adjustedX = (x - rect.left) / rect.width
    //   const adjustedY = (y - rect.top) / rect.height

    //   // При использовании тач-устройств может понадобиться увеличить чувствительность
    //   const sensitivity = isTouch ? 1.2 : 1

    //   setPos(
    //     new THREE.Vector3(
    //       (adjustedX * 2 - 1) * sensitivity, // Преобразование координат в диапазон [-1, 1]
    //       -(adjustedY * 2 - 1) * sensitivity,
    //       0,
    //     )
    //       .unproject(camera)
    //       .multiply(new THREE.Vector3(1, 1, 0))
    //       .clone(),
    //   )
    // })

    // _________________________________________________________________

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

    // _________________________________________________________________________

    // const bind = useDrag(({ down, movement: [mx, my], memo = pos }) => {
    //   document.body.style.cursor = down ? 'grabbing' : 'grab'

    //   // Перемещаем позицию относительно начальной позиции
    //   const newPos = new THREE.Vector3(
    //     memo.x + mx * 0.01, // Уменьшение значения для регулировки скорости перетаскивания
    //     memo.y - my * 0.01, // Инвертирование Y для корректного направления
    //     0,
    //   )

    //   setPos(newPos)
    //   return memo // Возвращаем начальную позицию для следующего вызова
    // })

    return (
      <Circle
        ref={ref}
        {...bind()}
        opacity={0.2}
        radius={0.5}
        color={color}
        // position={pos.toArray()}
        position={pos}
        {...props}
      >
        <Circle
          radius={0.25}
          position={[0, 0, 0.1]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          // color={hovered ? '#ff1050' : color}
          color={hovered ? '#3d4bb7' : color}
        >
          <Text position={[0, 0, 1]} fontSize={0.25}>
            {name}
          </Text>
        </Circle>
      </Circle>
    )
  },
)

Node.displayName = 'Node'

export default Node
