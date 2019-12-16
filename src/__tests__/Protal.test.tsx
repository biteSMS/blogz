import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Portal from '@/components/Portal'

describe('<Portal />', () => {
  it('render Child', () => {
    const Child = () => <div>children</div>
    const wrapper = mount(<Portal><Child /></Portal>)
    expect(wrapper.find(Portal).length).toEqual(1)
    expect(document.body.childNodes.length).toEqual(1)
    expect(wrapper.find(Portal).contains(<Child />)).toBeTruthy()
    wrapper.unmount()
  })
  it('make sure to unmount at the end to clean up the document.body', () => {
    const wrapper = mount(<Portal>portal</Portal>)
    expect(document.body.childNodes.length).toEqual(1)
    wrapper.unmount()
    expect(document.body.childNodes.length).toEqual(0)
  })
})