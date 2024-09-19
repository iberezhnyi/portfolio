import { FC } from 'react'
import Link from 'next/link'
import { socials } from '@/data/common/commonData'
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

interface SocialsProps {
  containerStyles: string
  iconStyles: string
}

export const socialsIconMap = {
  FaGithub: <FaGithub />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaTelegram: <FaTelegram />,
}

const Socials: FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {socialsIconMap[item.icon]}
        </Link>
      ))}
    </div>
  )
}

export default Socials
