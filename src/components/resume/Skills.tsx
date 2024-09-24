import { FC } from 'react'
import { skills, technologies } from '@/data/resume/resumeData'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
// import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaFigma,
//   FaNodeJs,
// } from 'react-icons/fa'
import BallCanvas from './BallCanvas'
import Ball from './Ball'

// export const techIconMap = {
//   FaHtml5: <FaHtml5 />,
//   FaCss3: <FaCss3 />,
//   FaJs: <FaJs />,
//   FaReact: <FaReact />,
//   FaFigma: <FaFigma />,
//   FaNodeJs: <FaNodeJs />,
//   SiTailwindcss: <SiTailwindcss />,
//   SiNextdotjs: <SiNextdotjs />,
// }

const Skills: FC = () => {
  return (
    <section className="flex flex-col gap-[30px]">
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

      <ul className="grid grid-cols-2 lg:grid-cols-5 gap-[10px]">
        {technologies.map((item, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                    <BallCanvas>
                      <Ball imgUrl={item.icon} />
                    </BallCanvas>
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
