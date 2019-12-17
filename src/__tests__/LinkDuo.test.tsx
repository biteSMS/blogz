import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import LinkDuo from '@/components/LinkDuo'

describe('<LinkDuo />', () => {
  let wrapper: ReactWrapper
  afterEach(() => {
    if (wrapper.exists()) wrapper.unmount()
  })
  it('url', () => {
    wrapper = mount(<LinkDuo to="https://google.com" />)
    expect(wrapper.find('a').prop('href')).toBe('https://google.com')
  })
  it('link', () => {
    wrapper = mount(
      <Router>
        <LinkDuo to="/foo/bar" />
      </Router>
    )
    expect(wrapper.find('a').prop('href')).toBe('/foo/bar')
  })
  it('URL Schemes', () => {
    wrapper = mount(<LinkDuo to="weixin://scanqrcode" />)
    expect(wrapper.find('a').prop('href')).toBe('weixin://scanqrcode')
  })
  it('props children', () => {
    const Children = () => <div>children</div>
    wrapper = mount(
      <LinkDuo to="https://google.com">
        <Children />
      </LinkDuo>
    )
    expect(wrapper.contains(<Children />)).toBeTruthy()
  })
})
