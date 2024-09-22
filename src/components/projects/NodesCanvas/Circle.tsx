'use client'

import * as THREE from 'three'
import { forwardRef, ReactNode } from 'react'

interface CircleProps {
  children?: ReactNode
  opacity?: number
  radius?: number
  segments?: number
  color?: string
  position?: [number, number, number] | THREE.Vector3
  onPointerOver?: () => void
  onPointerOut?: () => void
}

const Circle = forwardRef<THREE.Mesh, CircleProps>(
  (
    {
      children,
      opacity = 1,
      radius = 0.05,
      segments = 32,
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
