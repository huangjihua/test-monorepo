import React from 'react'

export function Button({ children, active, ...rest }) {
  const _style = {
    margin: '0 5px',
    padding: '10px 10px',
    border: 'none',
    outline: 'none',
  }
  return (
    <button style={active ? { background: children, ..._style } : {}} {...rest}>
      {children}
    </button>
  )
}

class GroupButton extends React.PureComponent {
  state = {
    activeIndex: 0,
  }
  render() {
    return (
      <>
        {React.Children.map(this.props.children, (child, index) =>
          child.type
            ? React.cloneElement(child, {
                active: this.state.activeIndex === index,
                onClick: () => {
                  this.setState({ activeIndex: index })
                  this.props.onChange(child.props.value)
                },
              })
            : child
        )}
      </>
    )
  }
}

export default GroupButton
