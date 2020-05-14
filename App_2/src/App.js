import React, { Component } from "react";
import "./App.css";
import TodoInput from "./Components/Todo_Input";
import TodoList from "./Components/Todo_List";
import uuid from "uuid";

class App extends Component {
  state = {
    todo_List: [],
    id: uuid(),
    text: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleSubmit = e => {
    if (!this.state.text.length) {
      return;
    }
    e.preventDefault();
    const newText = {
      id: this.state.id,
      title: this.state.text
    };

    const updatedText = [...this.state.todo_List, newText];
    this.setState({
      todo_List: updatedText,
      text: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      todo_List: []
    });
  };

  handleDelete = id => {
    const filteredText = this.state.todo_List.filter(text => text.id !== id);
    this.setState({
      todo_List: filteredText
    });
  };
  handleEdit = id => {
    console.log(id);
    const filteredText = this.state.todo_List.filter(text => text.id !== id);
    const selectedText = this.state.todo_List.find(text => text.id === id);
    console.log(selectedText);

    this.setState({
      todo_List: filteredText,
      text: selectedText.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-center my-3 text-white">TODO APP</h1>
            <h3 className="text-capitalize text-center text-white">Todo Input</h3>
            <TodoInput
              text={this.state.text}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              todo_List={this.state.todo_List}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;