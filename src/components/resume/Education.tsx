import { FC } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { education } from '@/data/resume/resumeData'

const Education: FC = () => {
  return (
    <section className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education.items.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>

              <h3 className="text-2xl max-w-[260px] mb-4 text-center lg:text-left text-white/60">
                {item.degree}
              </h3>

              <p className="">{item.institution}</p>

              <ul className="list-disc list-inside">
                {item.description.map((descItem, index) => (
                  <li
                    key={index}
                    className="marker:w-[6px] marker:h-[6px] marker:text-accent marker:text-base"
                  >
                    <p className="text-white/60 inline">{descItem}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </section>
  )
}

export default Education
