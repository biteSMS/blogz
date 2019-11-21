import { useState, useEffect } from 'react'

function useScrollUp() {
  const [isScrollUp, setIsScrollUp] = useState(false)
  useEffect(() => {
    window.addEventListener('mousewheel', (e: WheelEvent): void => {
      e.stopPropagation()
      if (e.deltaY > 0) {
        setIsScrollUp(false)
      } else if (e.deltaY < 0) {
        setIsScrollUp(true)
      }
    })
  })
  return isScrollUp
}

export default useScrollUp
