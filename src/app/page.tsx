import { FC } from 'react'
import Photo from '@/components/home/Photo'
import Stats from '@/components/home/Stats'
import MainInfo from '@/components/home/MainInfo'

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <MainInfo />

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <Stats />
      </section>
    </>
  )
}

export default Home
