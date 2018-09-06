import React from "react";
import { connect } from "react-redux";
import {
  selectAll,
  selectActive,
  selectCompleted
} from "../actions/selectmenuActions";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.switchMenu = this.switchMenu.bind(this);
  }
  switchMenu() {
    console.log("Obtained props are", this.props);
    if (this.props.linkItem === "All") {
      this.props.dispatch(selectAll());
    } else if (this.props.linkItem === "Active") {
      this.props.dispatch(selectActive());
    } else {
      this.props.dispatch(selectCompleted());
    }
  }
  render() {
    return (
      <a href={this.props.linkText} onClick={this.switchMenu}>
        {this.props.linkItem}{" "}
      </a>
    );
  }
}

const menuContainer = connect()(MenuItem);
export default menuContainer;
