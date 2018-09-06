import React from "react";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a href={this.props.linkText}>{this.props.linkItem} </a>;
  }
}

export default MenuItem;
