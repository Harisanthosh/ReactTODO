import React from "react";
import { connect } from "react-redux";

class ToDoSearch extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" size="60" id="todoText" /> &nbsp;
          <input type="button" value="Add TODO" /> <br />
          <br />
        </form>
      </div>
    );
  }
}

const addContainer = connect()(ToDoSearch);
export default addContainer;
