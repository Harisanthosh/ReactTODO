import React from "react";
import { connect } from "react-redux";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let liJSX = null;
    if (this.props.complete) {
      liJSX = <del>{this.props.todo}</del>;
    } else {
      liJSX = this.props.todo;
    }
    return <li>{liJSX}</li>;
  }
}

const listContainer = connect()(ListItem);
export default listContainer;
