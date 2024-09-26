import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
// import Header from '@/components/common/Header'
// import PageTransition from '@/components/common/PageTransition'
// import StairsTransition from '@/components/common/StairsTransition'
// import { SnackbarProvider } from 'notistack'
import './globals.css'
import ClientLayout from './ClientLayout'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export const metadata: Metadata = {
  title: 'Full-Stack Developer Portfolio | Ihor Berezhnyi',
  description:
    'Explore the portfolio of Ihor Berezhnyi, a full-stack developer specializing in web development, backend, and frontend technologies.',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <ClientLayout>{children}</ClientLayout>

        {/* <Header /> */}

        {/* <StairsTransition /> */}

        {/* <PageTransition> */}
        {/* <SnackbarProvider maxSnack={3}> */}
        {/* <main className="h-full">{children}</main> */}
        {/* </SnackbarProvider> */}
        {/* </PageTransition> */}
      </body>
    </html>
  )
}

export default RootLayout
