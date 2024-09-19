'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { links } from '@/data/common/commonData'

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
