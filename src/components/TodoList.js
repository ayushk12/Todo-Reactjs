import React from "react";
import { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3>Todo List</h3>
        <button type="button" className="btn btn-danger mt-5">
          Clear List
        </button>
      </ul>
    );
  }
}
