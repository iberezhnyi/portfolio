import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
// import Header from '@/components/common/Header'
// import PageTransition from '@/components/common/PageTransition'
// import StairsTransition from '@/components/common/StairsTransition'
// import { SnackbarProvider } from 'notistack'
import './globals.css'
import ClientLayout from './ClientLayout'
import { GoogleAnalytics } from '@next/third-parties/google'

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
  const trackingId = process.env.GA_ID || ''

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

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

      <GoogleAnalytics gaId={trackingId} />
    </html>
  )
}

export default RootLayout
