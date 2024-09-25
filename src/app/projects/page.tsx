'use client'

import { FC, useState } from 'react'

import { motion } from 'framer-motion'
import { SwiperClass } from 'swiper/react'
import ProjectsSlider from '@/components/projects/ProjectsSlider'
import ProjectsInfo from '@/components/projects/ProjectsInfo'
import { allProjects } from '@/data/projects/projectsData'
import { IProject } from '@/interfaces/interfaces'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import 'swiper/css'

const Projects: FC = () => {
  const [currentProject, setCurrentProject] = useState<IProject>(allProjects[0])

  const handleSlideChange = (swiper: SwiperClass): void => {
    const currentIndex = swiper.activeIndex

    setCurrentProject(allProjects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <VisuallyHidden>
          <h1>Explore My Web Development Projects</h1>
        </VisuallyHidden>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <ProjectsInfo currentProject={currentProject} />

          <ProjectsSlider
            allProjects={allProjects}
            currentProject={currentProject}
            onSlideChange={handleSlideChange}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
