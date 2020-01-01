import { useState, useEffect } from 'react'

// adapt desktop & mobile header
// TODO: refactor

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
  function adaptListener(e: Event) {
    e.stopPropagation()
    e.preventDefault()
    isAdapt() ? setRes(true) : setRes(false)
  }
  useEffect(() => {
    window.addEventListener('resize', adaptListener)
    window.addEventListener('scroll', adaptListener)
    return () => {
      window.removeEventListener('resize', adaptListener)
      window.removeEventListener('scroll', adaptListener)
    }
  }, [])
  return res
}

export default useAdapt
