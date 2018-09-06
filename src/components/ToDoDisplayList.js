import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

class ToDoDisplayList extends React.Component {
  constructor(props) {
    super(props);
  }
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
function mapStateToProps(state) {
  //tbd
}

const displayListContainer = connect(mapStateToProps)(ToDoDisplayList);
export default displayListContainer;

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
