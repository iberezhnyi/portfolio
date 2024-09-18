import { FC } from 'react'
import Photo from '@/components/home/Photo'
import Stats from '@/components/home/Stats'
import MainInfo from '@/components/home/MainInfo'

const Home: FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <MainInfo />

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home
