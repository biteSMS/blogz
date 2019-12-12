import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

const LinkDuo: React.FC<LinkProps> = props => {
  if (/^\w+:\/\//.test(props.to as string)) {
    return (
      <a href={props.to as string} target="_blank" {...props}>
        {props.children}
      </a>
    )
  } else {
    return <Link {...props}>{props.children}</Link>
  }
}

export default LinkDuo
