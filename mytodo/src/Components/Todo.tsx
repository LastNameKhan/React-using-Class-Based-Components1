import React, { Component } from "react";

type MyState = {};

type MyProps = {
  todos: any;
};

class Todo extends Component<MyProps, MyState> {
  render() {
    console.log(this.props.todos)
    return (
      <div>
        <ol>{this.props.todos}</ol>
      </div>
    );
  }
}

export default Todo;
