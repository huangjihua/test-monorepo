import React from "react";

class Base extends React.PureComponent {
  getAlbumItem = () => {
    return null;
  };
  render() {
    return (
      <div>
        {this.getName()}
        <div>公共逻辑</div>
      </div>
    );
  }
}

export default Base;
