'use client'

import { FC } from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

interface SliderBtnsProps {
  containerStyles: string
  btnStyles: string
  iconStyles: string
}

const SliderBtns: FC<SliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
}) => {
  const swiper = useSwiper()

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>

      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}

export default SliderBtns
