import React, { Component } from "react";
import { Menu, Icon, Layout, Avatar, Dropdown, Button, Drawer } from "antd";
import * as routes from "../common/routes";
import windowSize from "react-window-size";

import { inject, observer } from "mobx-react";

// @inject("sessionStore")
// @observe
// @observer
class Navigation extends Component {
  let { toggleMobileMenuOpen, mobileMenuOpen, authUser, tab } = this.props.sessionStore;
  
  render() {
    return <div></div>;
  }
}

export default windowSize(Navigation);
