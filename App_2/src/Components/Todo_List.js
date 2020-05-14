import React, { Component } from "react";
import TodoItem from "./Todo_Item";

export default class TodoList extends Component {
  render() {
    const { todo_List, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ol className="list-group my-3">
        <h3 className="text-capitalize text-center my-3 text-white">Todo List</h3>
        {todo_List.map(text => {
          return (
            <TodoItem
              key={text.id}
              title={text.title}
              handleDelete={() => handleDelete(text.id)}
              handleEdit={() => handleEdit(text.id)}
            />
          );
        })}
        <button className="btn btn-danger text-capitalize mt-3" onClick={clearList}>
          clear All
        </button>
      </ol>
    );
  }
}