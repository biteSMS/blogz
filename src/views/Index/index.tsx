import * as React from 'react'
import Background from '@/components/Background'
import './index.less'

const Index: React.FC = () => {
  return (
    <div className="content">
      <Background title="Wentz's Blog" subTitle="" image={require('@/assets/images/index-background.jpg')} />
    </div>
  )
}

export default Index
