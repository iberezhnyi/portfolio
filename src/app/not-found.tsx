'use client'

import { FC } from 'react'
import Link from 'next/link'
import Header from '@/components/common/Header'
// import { Button } from '@/components/ui/button'
import Image from 'next/image'

const NotFound: FC = () => {
  // const handleRetry = () => {
  //   window.location.reload()
  // }

  return (
    <html>
      <body>
        <main className="h-[100vh]">
          <Header />

          <div className="flex flex-col items-center justify-center p-4 rounded-md">
            <Image src="/assets/errors/222.png" alt="" className="mb-4"></Image>
            <h2 className="text-4xl font-bold mb-2">404</h2>
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            {/* <h2 className="text-xl font-bold mb-2">{error}</h2> */}
            <p>The page you are looking for doesn&apos;t exist.</p>
            <p></p>
            <p className="mb-4">Please</p>
            {/* <div>
              <Button onClick={handleRetry} className="mb-4">
                Retry
              </Button>
            </div> */}
            {/* <p className="mb-4">
              Or back to the home page to choose a new direction.
            </p> */}
            <p className="mb-4">
              Go back to the home page to choose a new direction.
            </p>
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
    // <html>
    //   <body>
    //     <main className="h-[100vh]">
    //       <Header />

    //       <div className="flex flex-col items-center justify-center p-4 rounded-md">
    //         <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
    //         <h2 className="text-xl font-bold mb-2">404</h2>
    //         <p className="mb-4 text-center">{message}</p>
    //         <div>
    //           <button
    //             onClick={onRetry}
    //             className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-hover transition"
    //           >
    //             Retry
    //           </button>
    //         </div>
    //         <p>Or</p>
    //         <Link
    //           href="/"
    //           className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-hover transition"
    //         >
    //           Home
    //         </Link>
    //       </div>
    //     </main>
    //   </body>
    // </html>
  )
}

export default NotFound
