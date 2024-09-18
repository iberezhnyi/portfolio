'use client'

import { FC } from 'react'
// import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import exportedTabs from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  IAboutMe,
  IEducation,
  IExperience,
  ISkills,
} from '@/interfaces/interfaces'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'

// const exportedTabs = dynamic(() => import('@/components/ui/tabs'), {
//   ssr: false,
// })

// const { Tabs, TabsContent, TabsList, TabsTrigger } = exportedTabs

const about: IAboutMe = {
  title: 'About Me',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',

  info: [
    { fieldName: 'Name', fieldValue: 'Ihor Berezhnyi' },
    { fieldName: 'Phone', fieldValue: '+38 (063) 111 11 11' },
    { fieldName: 'Experience', fieldValue: '1+ Year' },
    { fieldName: 'Nationality', fieldValue: 'American' },
    { fieldName: 'Email', fieldValue: 'iberezhnyi@gmail.com' },
    { fieldName: 'Telegram', fieldValue: '@iberezhnyi' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'English, Ukrainian, Russian' },
  ],
}

const experience: IExperience = {
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2024-present',
    },

    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2023',
    },

    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2022-2023',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },
  ],
}

const education: IEducation = {
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',
  items: [
    {
      institution: 'GoIT',
      degree: 'Full Stack Developer',
      duration: '2023-2024',
    },
  ],
}

const skills: ISkills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
  ],
}

const Resume: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
