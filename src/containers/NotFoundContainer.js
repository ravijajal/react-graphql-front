import React, { Component } from "react";
import "../styles/containers/NotFoundContainer.scss";

class NotFoundContainer extends Component {
  render() {
    return (
      <div className="not-found-container text-center">
        <h1 className="mt-5">Page Not Found</h1>
      </div>
    );
  }
}

export default NotFoundContainer;
