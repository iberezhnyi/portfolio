import { ILinkItem, ISocial } from '@/interfaces/interfaces'

export const links: ILinkItem[] = [
  {
    name: 'home',
    path: '/',
  },

  {
    name: 'services',
    path: '/services',
  },

  {
    name: 'resume',
    path: '/resume',
  },

  {
    name: 'projects',
    path: '/projects',
  },

  {
    name: 'contacts',
    path: '/contacts',
  },
]

export const socials: ISocial[] = [
  { icon: 'FaGithub', path: 'https://github.com/iberezhnyi' },
  { icon: 'FaLinkedinIn', path: 'https://www.linkedin.com/in/ihor-berezhnyi/' },
  { icon: 'FaTelegram', path: 'https://t.me/iberezhnyi' },
]
