import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { toggleItem } from "../actions/toggletodosActions";

class ToDoDisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
      todos: []
    };
    this.toggleList = this.toggleList.bind(this);
  }
  toggleList() {
    console.log("With props id", this.props.id);
    this.props.dispatch(toggleItem(this.props.id));
  }
  render() {
    //don't make presentational components intelligent
    let itemsJSX = [];
    console.log("Array of todos are :", this.props.todos);
    let arrJSX = this.props.todos;
    /* 
        <ListItem
          todo={element[0] && element[0].text}
          complete={element[0] && element[0].complete}
          id={element[0] && element.id}
          onClick={this.toggleList}
        />
    */
    //const complete = element.complete == true? "complete" : "";
    const itemsArray = arrJSX.map(vet => {
      console.log(vet);
      return vet;
    });
    itemsJSX = arrJSX.map(element => {
      console.log("Inside Map element is", element);
      return (
        <ListItem
          key={element.id}
          todo={element.text}
          complete={element.complete}
          id={element.id}
          onClick={this.toggleList}
        />
      );
    });
    console.log("Array jsx built is", itemsJSX);
    return (
      <div>
        <ul>{itemsJSX}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //
  console.log("Subscribed function called", state);
  if (state.menu == "ALL") {
    console.log(state.todos);
    return {
      menu: state.menu,
      todos: state.todos
    };
  } else if (state.menu == "ACTIVE") {
    let activeItems = state.todos.filter(element => {
      if (!element.complete) {
        return element;
      }
    });
    console.log(activeItems);
    return {
      menu: state.menu,
      todos: activeItems
    };
  } else {
    let completedItems = state.todos.filter(element => {
      if (element.complete) {
        return element;
      }
    });
    console.log(completedItems);
    return {
      menu: state.menu,
      todos: completedItems
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
