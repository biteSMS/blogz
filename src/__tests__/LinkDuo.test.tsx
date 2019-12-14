import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import LinkDuo from '@/components/LinkDuo'

describe('<LinkDuo />', () => {
  it('url', () => {
    const wrapper = mount(<LinkDuo to="https://google.com" />)
    expect(wrapper.find('a').prop('href')).toBe('https://google.com')
  })
  it('link', () => {
    const wrapper = mount(
      <Router>
        <LinkDuo to="/foo/bar" />
      </Router>
    )
    expect(wrapper.find('a').prop('href')).toBe('/foo/bar')
  })
  it('URL Schemes', () => {
    const wrapper = mount(<LinkDuo to="weixin://scanqrcode" />)
    expect(wrapper.find('a').prop('href')).toBe('weixin://scanqrcode')
  })
  it('props children', () => {
    const Children = () => <div>children</div>
    const wrapper = mount(
      <LinkDuo to="https://google.com">
        <Children />
      </LinkDuo>
    )
    expect(wrapper.find('div').text()).toBe('children')
  })
})
