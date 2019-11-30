import * as React from 'react'
import Banner from '@/components/Banner'
import './index.less'

const Tags: React.FC = () => {
  return (
    <>
      <Banner
        title="标签"
        subTitle="TAGS"
        image={require('@/assets/images/index-background.jpg')}
      />
    </>
  )
}

export default Tags
