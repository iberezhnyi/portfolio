'use client'

import React from 'react'

export interface GlobalErrorProps {}

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
          <p>{error()}</p>
        </div>
      </body>
    </html>
  )
}
