'use client'

import { FC } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Experience = dynamic(() => import('@/components/resume/Experience'))
const Education = dynamic(() => import('@/components/resume/Education'))
const Skills = dynamic(() => import('@/components/resume/Skills'))
const About = dynamic(() => import('@/components/resume/About'))

const Resume: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] max-xl:items-center"
        >
          <TabsList className="w-full max-w-[380px]">
            <ul className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <li>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </li>
              <li>
                <TabsTrigger value="education">Education</TabsTrigger>
              </li>
              <li>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </li>
              <li>
                <TabsTrigger value="about">About me</TabsTrigger>
              </li>
            </ul>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume

// <Tabs
//   defaultValue="experience"
//   className="flex flex-col xl:flex-row gap-[60px]"
// >
//   <TabsList className="w-full max-w-[380px] mx-auto xl:mx-0">
//     <ul className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
//       <li>
//         <TabsTrigger value="experience">Experience</TabsTrigger>
//       </li>
//       <li>
//         <TabsTrigger value="education">Education</TabsTrigger>
//       </li>
//       <li>
//         <TabsTrigger value="skills">Skills</TabsTrigger>
//       </li>
//       <li>
//         <TabsTrigger value="about">About me</TabsTrigger>
//       </li>
//     </ul>
//   </TabsList>
