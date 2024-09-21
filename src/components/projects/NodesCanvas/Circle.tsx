'use client'

import * as THREE from 'three'
import { forwardRef, ReactNode } from 'react'

// Типизация для Circle компонента
interface CircleProps {
  children?: ReactNode
  opacity?: number
  radius?: number
  segments?: number
  color?: string
  position: THREE.Vector3
  [key: string]: any // Прочие пропсы
}

const Circle = forwardRef<THREE.Mesh, CircleProps>(
  (
    {
      children,
      opacity = 1,
      radius = 0.05,
      segments = 32,
      // color = '#ff1050',
      color = '#3da5b7',
      ...props
    },
    ref,
  ) => (
    <mesh ref={ref} {...props}>
      <circleGeometry args={[radius, segments]} />
      <meshBasicMaterial
        transparent={opacity < 1}
        opacity={opacity}
        color={color}
      />
      {children}
    </mesh>
  ),
)

Circle.displayName = 'Circle'

export default Circle
