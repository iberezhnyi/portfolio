'use client'

import { stats } from '@/data/home/homeData'
import { FC } from 'react'
import CountUp from 'react-countup'

const Stats: FC = () => {
  return (
    // <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
      <ul className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => (
          <li
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            key={index}
          >
            <div className="flex items-center">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />

              {(item.text.includes('Code commits') ||
                item.text.includes('Years of experience')) && (
                <p className="text-4xl font-extrabold">+</p>
              )}
            </div>

            <p
              className={`${
                item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
              } leading-snug text-white/80`}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
    // </section>
  )
}

export default Stats
