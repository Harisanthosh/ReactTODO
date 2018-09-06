import React from "react";

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

export default ToDoSearch;
