import * as React from 'react'
import Banner from '@/components/Banner'
import './index.less'

const Index: React.FC = () => {
  return (
    <div className="content">
      <Banner title="Wentz's Blog" image={require('@/assets/images/index-background.jpg')} />
    </div>
  )
}

export default Index
