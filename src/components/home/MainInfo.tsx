import { FC } from 'react'
import { Button } from '@/components/ui/button'
import Socials from '../common/Socials'
import { FiDownload } from 'react-icons/fi'

const MainInfo: FC = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <span className="text-xl">Fullstack Developer</span>
      <h1 className="h1 mb-6">
        Hello I&apos;m
        <br /> <span className="text-accent">Ihor Berezhnyi</span>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
        I exel at crafting elegant digital experiences and I am proficient in
        various programming languages and technologies.
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
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </div>
  )
}

export default MainInfo
