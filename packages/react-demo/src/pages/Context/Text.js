import * as React from 'react'
import { ThemeConsumer } from './context'

// 在这里，消费者使用了renderProps模式，Consumer会将上下文的数据作为参数传入
// renderProps渲染的函数之内，所以这个函数内才可以访问上下文的数据。
class Title extends React.Component {
  render() {
    return (
      <ThemeConsumer>{(theme) => <h1 style={{ color: theme.themeColor }}>title</h1>}</ThemeConsumer>
    )
  }
}
export default Title
