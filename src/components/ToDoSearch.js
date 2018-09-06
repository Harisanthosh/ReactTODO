import React from "react";
import { connect } from "react-redux";
import { addListItem } from "../actions/toggletodosActions";

class ToDoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    console.log("The Props obtained", this.props);
    const val = document.getElementById("todoText").value;
    this.props.dispatch(addListItem(val));
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" size="60" id="todoText" /> &nbsp;
          <input type="button" value="Add TODO" onClick={this.addItem} /> <br />
          <br />
        </form>
      </div>
    );
  }
}

const addContainer = connect()(ToDoSearch);
export default addContainer;
