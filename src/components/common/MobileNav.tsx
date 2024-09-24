'use client'

import { FC, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { links } from '@/data/common/commonData'
import { CiMenuFries } from 'react-icons/ci'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const MobileNav: FC = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setOpen(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <VisuallyHidden>
            <DialogTitle>Mobile navigation</DialogTitle>
            <SheetDescription>Mobile menu</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>

        <div className="mt-32 mb-10 text-center text-2xl">
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:text-accent transition-all group"
          >
            <h1 className="text-4xl font-semibold">
              iberezhnyi
              <span className="text-accent group-hover:text-white transition-all">
                .
              </span>
            </h1>
          </Link>
        </div>

        <nav>
          <ul className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <li
                key={index}
                className={`${
                  link.path === pathname &&
                  'text-accent border-b-2 border-accent'
                } text-xl capitalize hover:text-accent transition-all`}
              >
                <Link href={link.path} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
