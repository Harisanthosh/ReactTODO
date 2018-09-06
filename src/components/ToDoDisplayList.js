import React from "react";
import ListItem from "./ListItem";

class ToDoDisplayList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <ListItem todo="Learn React" complete />
          <ListItem todo="Learn Redux" />
          <ListItem todo="Learn Webpack" />
        </ul>
      </div>
    );
  }
}

export default ToDoDisplayList;
