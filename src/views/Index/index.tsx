import * as React from 'react'
import Banner from '@/components/Banner'
import Sidebar from '@/components/Sidebar'
import './index.less'

const Index: React.FC = () => {
  return (
    <div className="content">
      <Banner title="Wentz's Blog" image={require('@/assets/images/index-background.jpg')} />
      <div className="content-container flex jc-sb">
        <div className="article-list"></div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Index
