import { useState, useEffect } from 'react'

function isAdapt(): boolean {
  if (window.innerWidth > 768 && window.pageYOffset >= 395) {
    return true
  }
  if (window.innerWidth <= 768 && window.pageYOffset >= 195) {
    return true
  }
  return false
}

function useAdapt(): boolean {
  const [res, setRes] = useState(isAdapt)
  useEffect(() => {
    window.addEventListener('resize', (e: UIEvent): void => {
      e.stopPropagation()
      e.preventDefault()
      isAdapt() ? setRes(true) : setRes(false)
    })
    window.addEventListener('scroll', (e: Event): void => {
      e.stopPropagation()
      e.preventDefault()
      isAdapt() ? setRes(true) : setRes(false)
    })
  }, [])
  return res
}

export default useAdapt
