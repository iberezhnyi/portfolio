'use client'

import { FC } from 'react'
import Link from 'next/link'
import Header from '@/components/common/Header'

export interface IGlobalErrorProps {
  message: string
  onRetry?: () => void
}

const GlobalError: FC<IGlobalErrorProps> = ({ message, onRetry }) => {
  return (
    <html>
      <body>
        <main className="h-[100vh]">
          <Header />

          <div className="flex flex-col items-center justify-center p-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">An Error Occurred</h1>
            <h2 className="text-xl font-bold mb-2">Error</h2>
            <p className="mb-4 text-center">{message}</p>
            <div>
              <button
                onClick={onRetry}
                className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-hover transition"
              >
                Retry
              </button>
            </div>
            <p>Or</p>
            <Link
              href="/"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-hover transition"
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
