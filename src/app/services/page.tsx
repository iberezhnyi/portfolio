'use client'

import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { services } from '@/data/services/servicesData'
import { BsArrowDownRight } from 'react-icons/bs'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const Services: FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
        >
          <VisuallyHidden>
            <h1>Professional services we provide</h1>
          </VisuallyHidden>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {services.map((item, index) => (
              <li
                key={index}
                className="bg-[#232329] py-6 px-10 rounded-xl flex-1 flex flex-col justify-center gap-6 group"
              >
                <Tilt>
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {item.num}
                    </div>

                    <Link
                      href={item.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>

                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {item.title}
                  </h2>

                  <p className="text-white/60">{item.description}</p>

                  <div className="border-b border-white/20 w-full"></div>
                </Tilt>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  )
}

export default Services
