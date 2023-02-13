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
        {/* 除了提供<Mouse>呈现内容的静态表示之外，使用“render” prop 动态确定要渲染的内容。 */}
        <p>当前鼠标位置{this.props.render(this.state)}</p>
      </div>
    )
  }
}

const RenderPropsMouseTracker2 = () => {
  return (
    <>
      <h1>移动鼠标变化 动态确定要渲染的内容</h1>
      <Mouse
        render={(mouse) => {
          return (
            <p>
              当前鼠标位置{mouse.x},{mouse.y}
            </p>
          )
        }}
      />
    </>
  )
}
export default RenderPropsMouseTracker2
