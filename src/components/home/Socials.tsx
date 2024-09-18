import { FC } from 'react'
import Link from 'next/link'
import { ISocial } from '@/interfaces/interfaces'
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

interface SocialsProps {
  containerStyles: string
  iconStyles: string
}

const socials: ISocial[] = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaTelegram />, path: '' },
]

const Socials: FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
