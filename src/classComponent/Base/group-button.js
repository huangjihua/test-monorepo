import React from "react";

export function Button({ children, active, ...rest }) {
  return (
    <button
      style={
        active
          ? {
            background: "#37B057",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            outline: "none"
          }
          : {}
      }
      {...rest}
    >
      {children}
    </button>
  );
}

class GroupButton extends React.PureComponent {
  state = {
    activeIndex: 0
  };
  render() {
    return (
      <>
        {React.Children.map(this.props.children, (child, index) =>
          child.type
            ? React.cloneElement(child, {
              active: this.state.activeIndex === index,
              onClick: () => {
                this.setState({ activeIndex: index });
                this.props.onChange(child.props.value);
              }
            })
            : child
        )}
      </>
    );
  }
}

export default GroupButton;
