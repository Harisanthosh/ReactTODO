import React from "react";
import MenuItem from "./MenuItem";

class ToDoMenu extends React.Component {
  render() {
    return (
      <div>
        <MenuItem linkItem="All" linkText="#all" /> &nbsp;&nbsp;|{" "}
        <MenuItem linkItem="Active" linkText="#active" />
        &nbsp;&nbsp;| <MenuItem linkItem="Completed" linkText="#completed" />
        <br /> <br />
        <br />
      </div>
    );
  }
}

export default ToDoMenu;
