import React from "react";
import { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoItem />
      </div>
    );
  }
}
