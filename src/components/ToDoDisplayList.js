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

//Store Creation

const store = {
  menu: "ALL | ACTIVE | COMPLETED",
  todos: [
    {
      id: 1,
      text: "Learn React",
      complete: false
    }
  ]
};

//Actions
/*
    {type:"ADD_TODO", text:"Learn React"}
    {type:"TOGGLE_TODO", id:1}
    {type:"SWITCH_MENU", menu: "ALL | ACTIVE | COMPLETED"}

*/
