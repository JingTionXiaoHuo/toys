import { useEffect } from 'react'

import Versions from './components/Versions'

export default function GS(): JSX.Element {
  useEffect(() => {
    // 初始化
    window.dispatchEvent(new CustomEvent('ReactDomRender', { detail: 'base' }))

    return () => {
      // 组件卸载时需要做的事
    }
  }, [])

  return (
    <div id="Tolam">
      <Versions />
    </div>
  )
}
