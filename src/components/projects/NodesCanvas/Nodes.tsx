'use client'

import * as THREE from 'three'
import { createContext, useMemo, useRef, useState, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import { QuadraticBezierLine } from '@react-three/drei'

import { Vector3 } from 'three'
import Circle from './Circle'

// Типизация контекста
interface NodeState {
  position: THREE.Vector3
  connectedTo: React.RefObject<THREE.Mesh>[]
}

type NodeContextType = React.Dispatch<React.SetStateAction<NodeState[]>>
export const context = createContext<NodeContextType | undefined>(undefined)

// Типизация для Nodes компонента
interface NodesProps {
  children: ReactNode
}

function Nodes({ children }: NodesProps) {
  const group = useRef<THREE.Group>(null)
  const [nodes, setNodes] = useState<NodeState[]>([])

  const lines = useMemo(() => {
    const lines: { start: Vector3; end: Vector3 }[] = []
    for (const node of nodes) {
      //   node.connectedTo
      //     .map((ref) => [node.position, ref.current.position])
      //     .forEach(([start, end]) =>
      //       lines.push({
      //         start: start.clone().add(new THREE.Vector3(0.35, 0, 0)),
      //         end: end.clone().add(new THREE.Vector3(-0.35, 0, 0)),
      //       }),
      //     )

      // ______________________________________________________________________

      //   node.connectedTo
      //     .map((ref) =>
      //       ref.current ? [node.position, ref.current.position] : null,
      //     )
      //     .filter(Boolean) // убираем null значения
      //     .forEach(([start, end]) => {
      //       if (start && end) {
      //         lines.push({
      //           start: start.clone().add(new THREE.Vector3(0.35, 0, 0)),
      //           end: end.clone().add(new THREE.Vector3(-0.35, 0, 0)),
      //         })
      //       }
      //     })

      // _____________________________________________________________________________

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
      //   group.current.children.forEach((group) => {
      //     if (group.children[0].material?.uniforms?.dashOffset) {
      //       group.children[0].material.uniforms.dashOffset.value -= delta * 10
      //     }
      //   })

      // ________________________________________________________________________

      group.current.children.forEach((child) => {
        const mesh = child as THREE.Mesh
        if (mesh.material && mesh.material.uniforms?.dashOffset) {
          mesh.material.uniforms.dashOffset.value -= delta * 10
        }
      })

      // __________________________________________________________________________________

      //   group.current.children.forEach((child) => {
      //     const mesh = child as THREE.Mesh
      //     const material = mesh.material as THREE.ShaderMaterial // Приведение к ShaderMaterial

      //     if (material.uniforms?.dashOffset) {
      //       material.uniforms.dashOffset.value -= delta * 10
      //     }
      //   })
    }
  })

  return (
    <context.Provider value={setNodes}>
      <group ref={group}>
        {lines.map((line, index) => (
          <group key={index}>
            <QuadraticBezierLine
              {...line}
              // color="white"
              color="#3d4bb7"
              dashed
              dashScale={50}
              gapSize={20}
            />
            <QuadraticBezierLine
              {...line}
              // color="white"
              color="#3d4bb7"
              lineWidth={0.5}
              transparent
              opacity={0.1}
            />
          </group>
        ))}
      </group>
      {children}
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
