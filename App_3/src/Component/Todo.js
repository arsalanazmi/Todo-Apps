import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Student_Name: "",
      Student_Roll: "",
      Student_Class: "",
      Edit: false,
      index: "",
      todo: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // If any field is empty do not submit the Form.
    if (
      this.state.Student_Name === "" ||
      this.state.Student_Class === "" ||
      this.state.Student_Roll === ""
    ) {
      return;
    }

    let todo = this.state.todo;
    let Name = this.state.Student_Name;
    let Class = this.state.Student_Class;
    let Roll = this.state.Student_Roll;

    if (this.state.Edit === false) {
      // New data
      let data = {
        Name,
        Class,
        Roll,
      };
      todo.push(data);
      console.log(data);
    } else {
      // Edit data
      let index = this.state.index;
      todo[index].Name = Name;
      todo[index].Class = Class;
      todo[index].Roll = Roll;
    }

    this.setState({
      todo: this.state.todo,
      Edit: false,
      Student_Name: "",
      Student_Roll: "",
      Student_Class: "",
    });
    console.log(todo);
  };

  handleEdit = (i) => {
    let data = this.state.todo[i];
    console.log(data);

    this.setState({
      Edit: true,
      index: i,
      Student_Name: data.Name,
      Student_Class: data.Class,
      Student_Roll: data.Roll,
    });
  };

  handleDelete = (i) => {
    let todo = this.state.todo;
    todo.splice(i, 1);
    this.setState({
      todo: todo,
    });
  };

  render() {
    const { Student_Name, Student_Class, Student_Roll } = this.state;
    return (
      <div className="container">
        <h1 className="text-center mt-3 text-white">
          STUDENT MANAGEMENT SYSTEM
        </h1>
        <div className="row mt-5">
          <div className="form col-9 mx-auto col-md-5">
            <h2 className="text-center text-white">Student Data Input</h2>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Student_Name"
                  value={Student_Name}
                  onChange={this.handleChange}
                  placeholder="Student Name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicClass">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  type="text"
                  name="Student_Class"
                  value={Student_Class}
                  onChange={this.handleChange}
                  placeholder="Student Class"
                />
              </Form.Group>

              <Form.Group controlId="formBasicRoll">
                <Form.Label>Roll No.</Form.Label>
                <Form.Control
                  type="text"
                  name="Student_Roll"
                  value={Student_Roll}
                  onChange={this.handleChange}
                  placeholder="Student Roll No."
                />
              </Form.Group>

              {this.state.Edit === false ? (
                <Button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="btn button btn-primary"
                >
                  Add
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="btn btn-success"
                >
                  Update
                </Button>
              )}
            </Form>
          </div>
        </div>

        <div className="row">
          <h2 className="text-center mx-auto mt-4 mb-3 text-white">
            Student Record
          </h2>
          <div className="table-responsive mx-auto">
            <table className="w-100 text-center col-6 mx-auto col-md-10 table table-bordered table-hover table-dark table-striped">
              <thead>
                <tr>
                  <th className="serial_no">S.No</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Roll. No.</th>
                  <th> Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {this.state.todo.map((data, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td className="serial_no">{i + 1}.</td>
                      <td>{data.Name}</td>
                      <td>{data.Class}</td>
                      <td>{data.Roll}</td>
                      <td>
                        <Button
                          onClick={() => this.handleEdit(i)}
                          className="btn btn-info"
                        >
                          Edit
                        </Button>
                      </td>
                      <td className="delete_button">
                        <Button
                          onClick={() => this.handleDelete(i)}
                          className="btn btn-danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}