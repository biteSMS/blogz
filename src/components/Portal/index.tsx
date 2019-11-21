import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const Portal: React.FC = props => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }
  const el = elRef.current

  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  }, [])

  return ReactDOM.createPortal(props.children, el)
}

export default Portal
