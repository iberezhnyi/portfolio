import { ILinkItem, ISocial } from '@/interfaces/interfaces'

export const links: ILinkItem[] = [
  {
    name: 'home',
    path: '/',
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
  { icon: 'FaGithub', path: '' },
  { icon: 'FaLinkedinIn', path: '' },
  { icon: 'FaTelegram', path: '' },
]
