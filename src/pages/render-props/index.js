/* eslint-disable react/jsx-max-props-per-line */
import React from 'react'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this) // 绑定下this,不然函数里无法获取到setState
    this.state = { x: 0, y: 0 }
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ height: '100px' }}>
        {/* 使用 render props 属性来确定要渲染的内容 */}
        <p>
          当前鼠标位置{this.state.x},{this.state.y}
        </p>
      </div>
    )
  }
}

const RenderPropsMouseTracker = () => {
  return (
    <>
      <h1>移动鼠标变化</h1>
      <Mouse />
    </>
  )
}
export default RenderPropsMouseTracker
