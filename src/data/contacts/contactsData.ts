import { IContactInfoItem } from '@/interfaces/interfaces'

export const contactInfo: IContactInfoItem[] = [
  {
    icon: 'FaPhoneAlt',
    title: 'Phone',
    description: '+38(063) 111 11 11',
    href: 'tel:+380631111111',
  },

  {
    icon: 'FaEnvelope',
    title: 'Email',
    description: 'iberezhnyi@gmail.com',
    href: 'mailto:iberezhnyi@gmail.com',
  },

  {
    icon: 'FaMapMarkerAlt',
    title: 'Address',
    description: 'Ukraine, Kyiv',
    href: 'https://maps.app.goo.gl/yZ5K3oB1TXFxfu5d8',
  },
]
