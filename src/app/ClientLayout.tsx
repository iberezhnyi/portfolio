'use client'

import { FC, ReactNode } from 'react'
import Header from '@/components/common/Header'
import PageTransition from '@/components/common/PageTransition'
import StairsTransition from '@/components/common/StairsTransition'
import { SnackbarProvider } from 'notistack'
// import { styled } from '@mui/material/styles'

interface ClientLayoutProps {
  children: ReactNode
}

// import { MaterialDesignContent } from 'notistack'

// const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
//   '&.notistack-MuiContent-success': {
//     backgroundColor: '#3e0c5c',
//   },
//   '&.notistack-MuiContent-error': {
//     backgroundColor: '#970C0C',
//   },
// }))

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <StairsTransition />
      <PageTransition>
        <SnackbarProvider
          maxSnack={3}
          // Components={{
          //   success: StyledMaterialDesignContent,
          //   error: StyledMaterialDesignContent,
          // }}
        >
          <main className="h-full">{children}</main>
        </SnackbarProvider>
      </PageTransition>
    </>
  )
}

export default ClientLayout
