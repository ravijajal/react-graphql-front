import React, { Component } from "react";

class EmptyLayout extends Component {
  render() {
    return (
      <div className="empty-layout">
        <div className="container-fluid">{this.props.children}</div>
      </div>
    );
  }
}

export default EmptyLayout;
