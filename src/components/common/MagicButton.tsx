'use client'

import { FC, useEffect, useState } from 'react'

const MagicButton: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error')
    }
  }, [count])

  return <button onClick={() => setCount(count + 1)}>Magic button</button>
}

export default MagicButton
