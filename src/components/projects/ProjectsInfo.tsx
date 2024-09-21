'use client'

import { useState, createRef, FC, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Nodes from './NodesCanvas/Nodes'
import Node from './NodesCanvas/Node'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  getRandomPosition,
  availablePositionsXL,
  availablePositionsLG,
  availablePositionsMD,
  availablePositionsSM,
  availablePositionsXS,
} from '@/helpers/getRandomPosition'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { IProject } from '@/interfaces/interfaces'

interface ProjectsInfoProps {
  currentProject: IProject
}

const ProjectsInfo: FC<ProjectsInfoProps> = ({ currentProject }) => {
  const [availablePositions, setAvailablePositions] = useState<
    [number, number][]
  >([])
  const nodeRefs = useState(() =>
    currentProject.stack.map(() => createRef<THREE.Mesh>()),
  )[0]

  const isXL = useMediaQuery({ minWidth: 1200 })
  const isLG = useMediaQuery({ minWidth: 960, maxWidth: 1199 })
  const isMD = useMediaQuery({ minWidth: 768, maxWidth: 959 })
  const isSM = useMediaQuery({ minWidth: 640, maxWidth: 767 })
  const isXS = useMediaQuery({ minWidth: 480, maxWidth: 639 })

  useEffect(() => {
    if (isXL) {
      setAvailablePositions([...availablePositionsXL])
    } else if (isLG) {
      setAvailablePositions([...availablePositionsLG])
    } else if (isMD) {
      setAvailablePositions([...availablePositionsMD])
    } else if (isSM) {
      setAvailablePositions([...availablePositionsSM])
    } else if (isXS) {
      setAvailablePositions([...availablePositionsXS])
    } else {
      setAvailablePositions([])
    }
  }, [isXL, isLG, isMD, isSM, isXS])

  const positionsCopy = [...availablePositions]

  return (
    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
      <div className="flex flex-col gap-[30px] h-[50%]">
        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
          {currentProject.num}
        </div>
        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
          {currentProject.category} project
        </h2>
        <p className="text-white/60">{currentProject.description}</p>

        {availablePositions.length === 0 ? (
          <ul className="flex flex-wrap gap-4">
            {currentProject.stack.map((item, index) => (
              <li key={index} className="text-xl text-accent">
                {item.name}
                {index !== currentProject.stack.length - 1 && ','}
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <Canvas key={currentProject.num} orthographic camera={{ zoom: 80 }}>
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
          </div>
        )}
        <div className="border border-white/20"></div>
        <div className="flex items-center gap-4">
          <Link href={currentProject.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                </TooltipTrigger>

                <TooltipContent>
                  <p>Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>

          <Link href={currentProject.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                </TooltipTrigger>

                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsInfo
