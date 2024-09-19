import { FC } from 'react'
import { skills } from '@/data/resume/resumeData'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'

import BallCanvas from './Nodes'

export const techIconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaFigma: <FaFigma />,
  FaNodeJs: <FaNodeJs />,
  SiTailwindcss: <SiTailwindcss />,
  SiNextdotjs: <SiNextdotjs />,
}

const technologies = [
  {
    name: 'HTML 5',
    icon: '/assets/icons/tech/html.png',
  },
  {
    name: 'CSS 3',
    icon: '/assets/icons/tech/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/assets/icons/tech/javascript.png',
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Next JS',
  //   icon: next,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'git',
  //   icon: git,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "rest",
  //   icon: rest,
  // },
  // {
  //   name: "styledComponents",
  //   icon: styledComponents,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
]

const Skills: FC = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
      </div>
      {/* <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    {techIconMap[skill.icon]}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul> */}
      <div>
        <ul>
          {technologies.map((item, index) => (
            <li key={index}>
              <BallCanvas icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
