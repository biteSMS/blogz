import * as React from 'react'
import './index.less'

interface IProps {
  image: any
}

const Background: React.FC<IProps> = props => (
  <div className="background">
    <img src={props.image} draggable={false} />
    {props.children}
  </div>
)

export default Background
