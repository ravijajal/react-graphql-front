import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import TopNavBarLinks from "../navigations/TopNavBarLinks";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleMenu: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(function(prevState, props) {
      return {
        toggleMenu: !prevState.toggleMenu
      };
    });
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          HRM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.handleToggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            "collapse navbar-collapse" + (this.state.toggleMenu ? " show" : "")
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {TopNavBarLinks.map((link, i) => (
              <NavItem
                key={i}
                to={link.to}
                wrapperClassName={link.wrapperClassName}
                wrapperActiveClassName={link.wrapperActiveClassName}
                className={link.className}
                label={link.label}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;
