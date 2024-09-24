import { Canvas } from '@react-three/fiber'
import { createRef, FC, useState } from 'react'
import * as THREE from 'three'
import Nodes from './Nodes'
import Node from './Node'
import { getRandomPosition } from '@/helpers/getRandomPosition'
import { IProject } from '@/interfaces/interfaces'

interface NodesCanvasProps {
  currentProject: IProject
  availablePositions: [number, number][]
}

const NodesCanvas: FC<NodesCanvasProps> = ({
  currentProject,
  availablePositions,
}) => {
  const nodeRefs = useState(() =>
    currentProject.stack.map(() => createRef<THREE.Mesh>()),
  )[0]

  const positionsCopy = [...availablePositions]

  return (
    <Canvas
      style={{ touchAction: 'none' }}
      key={currentProject.num}
      orthographic
      camera={{ zoom: 80 }}
    >
      <Nodes>
        {nodeRefs.map((ref, index) => {
          const stackItem = currentProject.stack[index]

          if (!stackItem) return null

          const [x, y] = getRandomPosition(positionsCopy)

          return (
            <Node
              key={index}
              ref={ref}
              name={stackItem.name}
              color={'#3da5b7'}
              position={[x, y, 0]}
              connectedTo={nodeRefs.filter((_, i) => i !== index)}
            />
          )
        })}
      </Nodes>
    </Canvas>
  )
}

export default NodesCanvas
