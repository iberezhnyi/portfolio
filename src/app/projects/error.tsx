'use client'

import React, { FC } from 'react'

export interface ErrorComponentProps {
  error: Error
  reset: () => void
}

const ErrorComponent: FC<ErrorComponentProps> = ({ error, reset }) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
export default ErrorComponent
