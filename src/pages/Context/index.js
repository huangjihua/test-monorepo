import * as React from 'react'
import { ThemeProvider } from './context'
import Page from './page'

// 提供者一般位于比较上边的层级，ThemeProvider 接受的value就是它要提供的上下文对象。

// render() {
//    const { theme } = this.state
//   return (
//     <ThemeProvider value={{ themeColor: theme }}>
//       <Page/>
//     </ThemeProvider>
//   )
// };
