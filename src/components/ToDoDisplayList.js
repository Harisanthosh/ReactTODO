import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { toggleItem } from "../actions/toggletodosActions";

class ToDoDisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleList = this.toggleList.bind(this);
  }
  toggleList() {
    console.log("With props", this.props);
    this.props.dispatch(toggleItem(this.props.id));
  }
  render() {
    //don't make presentational components intelligent
    let itemsJSX = null;
    itemsJSX = this.props.listItems.map(element => {
      // return
      //const complete = element.complete == true? "complete" : "";
      return (
        <ListItem
          todo={element.text}
          complete={element.complete}
          id={element.id}
          onClick={this.toggleList}
        />
      );
    });
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
  if (state.menu == "ALL") {
    return {
      listItems: [state.todos]
    };
  } else if (state.menu == "ACTIVE") {
    let activeItems = state.todos.map(element => {
      if (element.complete == false) {
        return element;
      }
    });
    return {
      listItems: activeItems
    };
  } else {
    let completedItems = state.todos.map(element => {
      if (element.complete == true) {
        return element;
      }
    });
    return {
      listItems: completedItems
    };
  }
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
