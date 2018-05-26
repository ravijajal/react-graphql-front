import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class NavItem extends Component {
  render() {
    const {
      wrapperClassName,
      wrapperActiveClassName,
      label,
      ...rest
    } = this.props;
    return (
      <Route
        path={this.props.to}
        exact={true}
        children={({ match }) => (
          <li
            className={
              wrapperClassName + (match ? " " + wrapperActiveClassName : "")
            }
          >
            <Link {...rest}>{label}</Link>
          </li>
        )}
      />
    );
  }
}
export default NavItem;
