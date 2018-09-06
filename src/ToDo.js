import React from "react";

class ToDo extends React.Component {
  render() {
    return (
      <div>
        <a href="#all">All </a> &nbsp;&nbsp;| <a href="#active">Active</a>{" "}
        &nbsp;&nbsp;| <a href="#Completed">Completed</a>
        <br /> <br />
        <input type="text" size="60" id="todoText" />
        <input type="button" value="Add TODO" onclick="toDoSubmit()" /> <br />
        <br />
        <ul id="listItems">
          <li>
            <del>Learn React</del>
          </li>
          <li>Learn Redux</li>
          <li>Learn Webpack</li>
        </ul>
      </div>
    );
  }
}

export default ToDo;
