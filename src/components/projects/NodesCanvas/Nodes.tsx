'use client'

import * as THREE from 'three'
import { createContext, useMemo, useRef, useState, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { QuadraticBezierLine } from '@react-three/drei'

import { Vector3 } from 'three'
import Circle from './Circle'
import SceneCleanup from '@/components/common/SceneCleanup'

interface NodeState {
  position: THREE.Vector3
  connectedTo: React.RefObject<THREE.Mesh>[]
}

type NodeContextType = React.Dispatch<React.SetStateAction<NodeState[]>>
export const context = createContext<NodeContextType | undefined>(undefined)

interface NodesProps {
  children: ReactNode
}

function Nodes({ children }: NodesProps) {
  const group = useRef<THREE.Group>(null)
  const [nodes, setNodes] = useState<NodeState[]>([])

  const lines = useMemo(() => {
    const lines: { start: Vector3; end: Vector3 }[] = []
    for (const node of nodes) {
      node.connectedTo
        .map((ref) =>
          ref.current ? [node.position, ref.current.position] : null,
        )
        .filter((value): value is [Vector3, Vector3] => value !== null) // уточнение типа
        .forEach(([start, end]) => {
          lines.push({
            start: start.clone().add(new THREE.Vector3(0.35, 0, 0)),
            end: end.clone().add(new THREE.Vector3(-0.35, 0, 0)),
          })
        })
    }
    return lines
  }, [nodes])

  useFrame((_, delta) => {
    if (group.current) {
      group.current.children.forEach((child) => {
        const lineGroup = child as THREE.Group

        lineGroup.children.forEach((lineChild) => {
          const lineMesh = lineChild as THREE.Mesh

          const material = lineMesh.material as THREE.ShaderMaterial

          if (material && material.uniforms && material.uniforms.dashOffset) {
            material.uniforms.dashOffset.value -= delta * 10
          }
        })
      })
    }
  })

  return (
    <context.Provider value={setNodes}>
      <group ref={group}>
        {lines.map((line, index) => (
          <group key={index}>
            <QuadraticBezierLine
              {...line}
              // color="#3d4bb7"
              color="white"
              dashed
              dashScale={50}
              gapSize={20}
            />
            <QuadraticBezierLine
              {...line}
              // color="#3d4bb7"
              color="white"
              lineWidth={0.5}
              transparent
              opacity={0.1}
            />
          </group>
        ))}
      </group>
      {children}

      <SceneCleanup />

      {lines.map(({ start, end }, index) => (
        <group key={index} position-z={1}>
          <Circle position={start} />
          <Circle position={end} />
        </group>
      ))}
    </context.Provider>
  )
}

export default Nodes
