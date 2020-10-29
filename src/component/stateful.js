import React from "react";

class Stateful extends React.Component {
  state = {
    name: "tori"
  };
  componentDidMount() {
    // fetch();
  }
  render() {
    return (
      <div>
        Hello, {this.state.name}{" "}
        <button onClick={() => this.setState({ name: "007" })}>改名</button>
        <p>data: {JSON.stringify(this.props.data)}</p>
      </div>
    );
  }
}

export default Stateful;
