import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";

class DirectoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="directory-menu">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    );
  }
}

export default DirectoryMenu;
