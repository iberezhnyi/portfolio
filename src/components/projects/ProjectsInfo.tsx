'use client'

import { useState, FC, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { availablePositionsXL } from '@/helpers/getRandomPosition'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { IProject } from '@/interfaces/interfaces'
import NodesCanvas from './NodesCanvas/NodesCanvas'
import { xL } from '@/helpers/mediaQueries'

interface ProjectsInfoProps {
  currentProject: IProject
}

const ProjectsInfo: FC<ProjectsInfoProps> = ({ currentProject }) => {
  const [availablePositions, setAvailablePositions] = useState<
    [number, number][]
  >([])
  const [nodes, setNodes] = useState(false)

  console.log('nodes :>> ', nodes)

  const isXL = useMediaQuery(xL)
  // const isLG = useMediaQuery(lG)
  // const isMD = useMediaQuery(mD)
  // const isSM = useMediaQuery(sM)
  // const isXS = useMediaQuery(xS)

  useEffect(() => {
    if (isXL) {
      setAvailablePositions([...availablePositionsXL])
      setNodes(true)
    }
    //   else if (isLG) {
    //   setAvailablePositions([...availablePositionsLG])
    // } else if (isMD) {
    //   setAvailablePositions([...availablePositionsMD])
    // } else if (isSM) {
    //   setAvailablePositions([...availablePositionsSM])
    // } else if (isXS) {
    //   setAvailablePositions([...availablePositionsXS])
    // }
    else {
      setAvailablePositions([])
      setNodes(false)
    }
  }, [
    isXL,
    // isLG,
    // isMD,
    // isSM,
    // isXS
  ])

  console.log('isXL :>> ', isXL)

  return (
    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
      <div className="flex flex-col gap-[15px] h-[50%]">
        <div className="flex items-baseline">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline mr-[10px]">
            {currentProject.num}
          </div>
          {currentProject.team && <p className="text-white/60">Team project</p>}
        </div>

        <div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {currentProject.category} project
          </h2>
        </div>

        <div>
          <p>{currentProject.title}</p>
          <p className="text-white/60 mb-2">{currentProject.description}</p>
          <p>Technologies:</p>
        </div>

        <div>
          {/* {availablePositions.length === 0 ? ( */}

          {!nodes ? (
            <ul className="flex flex-wrap gap-4 mb-4" translate="no">
              {currentProject.stack.map((item, index) => (
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {index !== currentProject.stack.length - 1 && ','}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mb-[3px]">
              <NodesCanvas
                currentProject={currentProject}
                availablePositions={availablePositions}
              />
            </div>
          )}

          <div className="border border-white/20"></div>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <Link
              href={currentProject.live}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
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
          </li>

          {currentProject.github.frontend && (
            <li>
              <Link
                href={currentProject.github.frontend}
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Github Frontend repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </li>
          )}

          {currentProject.github.backend && (
            <li>
              <Link
                href={currentProject.github.backend}
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Github Backend repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProjectsInfo
