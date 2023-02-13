import React from 'react'

class Stateful extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name || 'hank',
      data: this.props.data || 'not data',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('setTimeout:', this.state.name)
    }, 2000)
  }
  render() {
    return (
      <div>
        Hello, {this.state.name}{' '}
        <button onClick={() => this.setState({ name: 'new_Hoc' })}>改名</button>
        <p>data: {JSON.stringify(this.state.data)}</p>
      </div>
    )
  }
}

export default Stateful
