import React, { useState } from 'react'
import { mount } from 'enzyme'
import Portal from '@/components/Portal'

describe('<Portal />', () => {
  it('render Child', () => {
    const Child = () => <div>children</div>
    const wrapper = mount(
      <Portal>
        <Child />
      </Portal>
    )
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
  // TODO: elRef.current Branch
  // it('elRef.current Branch', () => {
  //   const HookWrapper: React.FC<{ hook: any }> = props => {
  //     props.hook ? props.hook() : undefined
  //     return <Portal data-hook={props.hook} />
  //   }
  //   const useHook = () => {
  //     const [val, setVal] = useState(0)
  //     setVal(1)
  //   }
  //   const wrapper = mount(<HookWrapper hook={() => useHook()} />)
  // })
})
