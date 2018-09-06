import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoDisplayList from "./components/ToDoDisplayList";
import ToDoSearch from "./components/ToDoSearch";
import ToDoMenu from "./components/ToDoMenu";

class App extends Component {
  render() {
    return (
      <div>
        <ToDoMenu />
        <ToDoSearch />
        <ToDoDisplayList />
      </div>
    );
  }
}

export default App;
