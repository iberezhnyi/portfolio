import { cloneElement, FC } from 'react'
import Link from 'next/link'
import { socials } from '@/data/common/commonData'
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

interface SocialsProps {
  containerStyles: string
  linkStyles: string
  iconStyles: string
}

export const socialsIconMap = {
  FaGithub: <FaGithub />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaTelegram: <FaTelegram />,
}

const Socials: FC<SocialsProps> = ({
  containerStyles,
  linkStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={linkStyles}>
          {/* {socialsIconMap[item.icon]} */}

          {cloneElement(socialsIconMap[item.icon], {
            className: iconStyles,
          })}
        </Link>
      ))}
    </div>
  )
}

export default Socials
