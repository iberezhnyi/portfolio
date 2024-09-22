import { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import SliderBtns from './SliderBtns'
import { IProject } from '@/interfaces/interfaces'

interface ProjectSliderProps {
  allProjects: IProject[]
  currentProject: IProject
  onSlideChange: (swiper: SwiperClass) => void
}

const ProjectsSlider: FC<ProjectSliderProps> = ({
  allProjects,
  currentProject,
  onSlideChange,
}) => {
  return (
    <div className="w-full xl:w-[50%]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="xl:h-[520px] mb-12"
        onSlideChange={onSlideChange}
      >
        {allProjects.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

              <div className="relative w-full h-full">
                <Image
                  src={currentProject.image}
                  fill
                  className="object-cover"
                  alt=""
                  sizes="(max-width: 1200px) 100vw, 50vw"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SliderBtns
          containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          iconStyles=""
        />
      </Swiper>
    </div>
  )
}

export default ProjectsSlider
