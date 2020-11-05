import React from 'react'

function BindHoc(Component) {
  return class HocComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: this.props.initialvalue || '',
      }
    }
    onChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render() {
      // const { forwardRef, ...rest } = this.props;
      // const newProps = {
      //   value: this.state.value,
      //   onChange: this.onChange,
      //   ...rest
      // };
      // return <Component {...newProps} ref={forwardRef} />;
      const newProps = {
        value: this.state.value,
        onChange: this.onChange,
        ...this.props,
      }
      return <Component {...newProps} />
    }
  }
}

export default BindHoc
