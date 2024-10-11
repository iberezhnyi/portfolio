import { FC } from 'react'
import { contactInfo } from '@/data/contacts/contactsData'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import Link from 'next/link'

export const contactsIconMap = {
  FaPhoneAlt: <FaPhoneAlt />,
  FaEnvelope: <FaEnvelope />,
  FaTelegram: <FaTelegram />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaGithub: <FaGithub />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
}

const ContactsList: FC = () => {
  return (
    <address className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 not-italic">
      <ul className="flex flex-col gap-10">
        {contactInfo.map((item, index) => (
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent rounded-md flex items-center justify-center">
              <div className="text-[28px]">{contactsIconMap[item.icon]}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.title}</p>
              <Link
                href={item.href}
                className="text-base xs:text-xl hover:text-accent transition-all"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                {item.description}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </address>
  )
}

export default ContactsList
