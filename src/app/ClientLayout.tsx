'use client'

import { FC, ReactNode } from 'react'
import Header from '@/components/common/Header'
import PageTransition from '@/components/common/PageTransition'
import StairsTransition from '@/components/common/StairsTransition'
import { SnackbarProvider } from 'notistack'

interface ClientLayoutProps {
  children: ReactNode
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <StairsTransition />
      <PageTransition>
        <SnackbarProvider maxSnack={3}>
          <main className="h-full">{children}</main>
        </SnackbarProvider>
      </PageTransition>
    </>
  )
}

export default ClientLayout
