import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Portal from '@/components/Portal'

describe('<Portal />', () => {
  let wrapper: ReactWrapper
  afterEach(() => {
    if (wrapper.exists()) wrapper.unmount()
  })
  it('render Child', () => {
    const Child = () => <div>children</div>
    wrapper = mount(
      <Portal>
        <Child />
      </Portal>
    )
    expect(wrapper.find(Portal).length).toEqual(1)
    expect(document.body.childNodes.length).toEqual(1)
    expect(wrapper.find(Portal).contains(<Child />)).toBeTruthy()
  })
  it('make sure to unmount at the end to clean up the document.body', () => {
    wrapper = mount(<Portal>portal</Portal>)
    expect(document.body.childNodes.length).toEqual(1)
    wrapper.unmount()
    expect(document.body.childNodes.length).toEqual(0)
  })
  it('elRef.current Branch', () => {
    const el = document.createElement('div')
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: el })
    wrapper = mount(<Portal>portal</Portal>)
    expect(useRefSpy).toBeCalledTimes(1)
    expect(document.body.childNodes.length).toEqual(1)
  })
})
