import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let liJSX = null;
    if (this.props.complete) {
      liJSX = <del>{this.props.todo}</del>;
    } else {
      liJSX = this.props.todo;
    }
    return <li>{liJSX}</li>;
  }
}

export default ListItem;
