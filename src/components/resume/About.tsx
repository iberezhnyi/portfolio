import { about } from '@/data/resume/resumeData'
import { FC } from 'react'

const About: FC = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-white/60 max-xs:text-base">
              {item.fieldName}:
            </span>
            <span className="text-xl max-xs:text-base">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
