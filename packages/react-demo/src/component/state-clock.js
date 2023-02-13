import React from 'react'
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()} // 有状态组件
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000)
  }
  componentWillMount(){
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h2>时间：{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}