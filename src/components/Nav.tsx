'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ILinkItem } from '@/interfaces/interfaces'

const links: ILinkItem[] = [
  {
    name: 'home',
    path: '/',
  },

  {
    name: 'resume',
    path: '/resume',
  },

  {
    name: 'works',
    path: '/works',
  },

  {
    name: 'contacts',
    path: '/contacts',
  },
]

const Nav: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          className={`${
            link.path === pathname && 'text-accent border-b-2 border-accent'
          } capitalize font-medium hover:text-accent transition-all`}
          href={link.path}
          key={index}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
