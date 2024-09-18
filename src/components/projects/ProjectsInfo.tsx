import { FC } from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { IProject } from '@/interfaces/interfaces'

interface ProjectsInfoProps {
  currentProject: IProject
}

const ProjectsInfo: FC<ProjectsInfoProps> = ({ currentProject }) => {
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

        <ul className="flex gap-4">
          {currentProject.stack.map((item, index) => (
            <li key={index} className="text-xl text-accent">
              {item.name}
              {index !== currentProject.stack.length - 1 && ','}
            </li>
          ))}
        </ul>

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
