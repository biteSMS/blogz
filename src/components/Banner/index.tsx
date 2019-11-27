import * as React from 'react'
import './index.less'

interface IProps {
  image: string
  title?: string
  subTitle?: string
}

const Banner: React.FC<IProps> = props => (
  <div className="background">
    <img src={props.image} draggable={false} />
    <div className="container">
      <div className="title">{props.title}</div>
      <div className="sub-title">{props.subTitle}</div>
    </div>
  </div>
)

export default Banner
