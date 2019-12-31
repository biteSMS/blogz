import { renderHook, act } from '@testing-library/react-hooks'
import useAdapt from '@/components/Header/useAdapt'

describe('useAdapt', () => {
  function changeWindow(width: number, height: number) {
    act(() => {
      ;(global as any).innerWidth = width
      ;(global as any).dispatchEvent(new Event('resize'))
      ;(global as any).pageYOffset = height
      ;(global as any).dispatchEvent(new Event('scroll'))
    })
  }

  const hook = renderHook(() => useAdapt())

  it('adapt desktop & mobile header', () => {
    changeWindow(1024, 400)
    expect(hook.result.current).toBe(true)
    changeWindow(1024, 200)
    expect(hook.result.current).toBe(false)
    changeWindow(700, 200)
    expect(hook.result.current).toBe(true)
    changeWindow(700, 100)
    expect(hook.result.current).toBe(false)
  })
})
