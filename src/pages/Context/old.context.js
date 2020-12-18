import * as React from 'react'
import PropTypes from 'prop-types'

// Provider是一个普通的组件，当然，是需要位于Consumer组件的上层。要创建它，我们需要用到两个方法：
// getChildContext: 提供自身范围上下文的数据
// childContextTypes：声明自身范围的上下文的结构

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: this.props.value,
    }
  }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}
ThemeProvider.childContextTypes = {
  theme: PropTypes.object,
}

// 消费者，需要用到contextTypes，来声明接收的上下文的结构。
const Title = (props, context) => {
  const { textColor } = context.theme
  return <p style={{ color: textColor }}>我是标题</p>
}

Title.contextTypes = {
  theme: PropTypes.object,
}

function OldContext() {
  return (
    <ThemeProvider value={{ color: 'green' }}>
      <Title />
    </ThemeProvider>
  )
}

export default OldContext
