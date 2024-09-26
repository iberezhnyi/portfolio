'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { links } from '@/data/common/commonData'

const Nav: FC = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex gap-8">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              link.path === pathname && 'text-accent border-b-2 border-accent'
            } capitalize font-medium hover:text-accent transition-all cursor-pointer`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
