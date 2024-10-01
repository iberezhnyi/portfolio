'use client'

import { FC } from 'react'
import Link from 'next/link'
import Header from '@/components/common/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export interface IGlobalErrorProps {
  error: Error
}

const GlobalError: FC<IGlobalErrorProps> = ({ error }) => {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <html>
      <body>
        <main className="h-[100vh]">
          <Header />

          <div className="flex flex-col items-center justify-center p-4 rounded-md">
            <Image src="/assets/errors/222.png" alt="" className="mb-4"></Image>
            <h1 className="text-2xl font-bold mb-4">An Error Occurred</h1>
            <h2 className="text-xl font-bold mb-2">{error.message}</h2>
            <p className="mb-4">Please</p>
            <div>
              <Button onClick={handleRetry} className="mb-4">
                Retry
              </Button>
            </div>
            <p className="mb-4">Or back to</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors uppercase gap-2 border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary h-[44px] px-6 tracking-[2px]"
            >
              Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}

export default GlobalError
