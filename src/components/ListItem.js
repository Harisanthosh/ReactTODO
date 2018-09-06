import React from "react";
import { connect } from "react-redux";
import { addListItem, toggleItem } from "../actions/toggletodosActions";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.crossItem = this.crossItem.bind(this);
  }
  crossItem() {
    console.log("Props obtained", this.props);
    //tbd
    this.props.dispatch(toggleItem(this.props.todo.id));
  }
  render() {
    let liJSX = null;
    if (this.props.complete) {
      liJSX = <del>{this.props.todo}</del>;
    } else {
      liJSX = this.props.todo;
    }
    return <li onClick={this.crossItem}>{liJSX}</li>;
  }
}

const listContainer = connect()(ListItem);
export default listContainer;
