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
    <ul className={containerStyles}>
      {socials.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className={linkStyles}
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            {/* {socialsIconMap[item.icon]} */}

            {cloneElement(socialsIconMap[item.icon], {
              className: iconStyles,
            })}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Socials
