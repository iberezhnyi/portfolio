'use client'

import { FC } from 'react'
import Link from 'next/link'
import Nav from './Nav'
// import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header: FC = () => {
  const pathname = usePathname()

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-semibold">
          <Link href="/" className="hover:text-accent transition-all group">
            iberezhnyi
            <span className="text-accent group-hover:text-white transition-all">
              .
            </span>
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Link
            href="/contacts"
            className={`${cn(pathname === '/contacts' && 'bg-accent-hover')} h-[44px] px-6 bg-accent text-primary hover:bg-accent-hover inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors`}
          >
            Hire me
            {/* <Button type="button">Hire me</Button> */}
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
