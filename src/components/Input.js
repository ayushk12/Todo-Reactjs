import React from "react";
import { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-tetx.bg-primary.text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form=control"
              placeholder="add a todo"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add
          </button>
        </form>
      </div>
    );
  }
}
