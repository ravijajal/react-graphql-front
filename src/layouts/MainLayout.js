import React, { Component } from "react";
import TopNavBar from "./TopNavBar";
import "../styles/layouts/MainLayout.scss";

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout h-100">
        <TopNavBar />
        <div className="container-fluid p-4">{this.props.children}</div>
      </div>
    );
  }
}

export default MainLayout;
