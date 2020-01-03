import { useState, useEffect } from 'react'

// TODO: fix duplicate binding bug.
interface ResponsiveInfo {
  [key: string]: boolean
}
type Subscriber = () => void

let info: ResponsiveInfo = {}
const subscribers = new Set<Subscriber>()

function init() {
  function listener(e: Event) {
    const oldInfo = info
    calculate()
    if (oldInfo === info) return
    for (const subscriber of subscribers) {
      subscriber()
    }
  }
  window.addEventListener('resize', listener)
}

function calculate() {
  const width = window.innerWidth
  if (width > 768) {
    info = {
      'desktop': true,
      'mobile': false
    }
  }
  if (width <= 768) {
    info = {
      'desktop': false,
      'mobile': true
    }
  }
}

function useResponsive() {
  init()
  const [state, setState] = useState(info)

  useEffect(() => {
    const subscriber = () => {
      setState(info)
    }
    subscribers.add(subscriber)
    return () => {
      subscribers.delete(subscriber)
    }
  }, [])

  return state
}

export default useResponsive
