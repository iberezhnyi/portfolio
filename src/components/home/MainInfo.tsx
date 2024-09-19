import { FC } from 'react'
import { Button } from '@/components/ui/button'
import Socials from '../common/Socials'
import { FiDownload } from 'react-icons/fi'

const MainInfo: FC = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <span className="text-xl">Full-Stack Developer</span>
      <h1 className="h1 mb-6">
        Hello I&apos;m
        <br /> <span className="text-accent">Ihor Berezhnyi</span>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
        Crafting polished and impactful digital experiences is my forte, backed
        by extensive knowledge in diverse programming technologies.
      </p>

      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
        <div className="mb-8 xl:mb-0">
          <Socials
            containerStyles="flex gap-6"
            linkStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            iconStyles="w-[23px] h-[23px]"
          />
        </div>
      </div>
    </div>
  )
}

export default MainInfo
