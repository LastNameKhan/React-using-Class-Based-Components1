import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

type MyProps = {};

type MyState = {
  newUser: string;
  users: String[];
  id: number;
  name: any;
  isOpen: boolean;
  user: any;
  userId: any;
  title: any;
  body: any;
};

class GetRequest extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      users: [],
      isOpen: false,
      title: "",
      body: "",
      userId: "",
    };
  }

  handleAllUserClick = (e: any) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleNewUserClick = (e: any) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  changeHandler = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e: any) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: this.state.title,
        body: this.state.body,
        userId: 1,
      })
      .then((response) => {
        console.log(response);
        this.setState({ posts: [response.users, ...this.state.users] });
        this.setState({ userId: "" });
        this.setState({ title: "" });
        this.setState({ body: "" });
      })
      .catch((error) => console.log(error));
  };

  handleEditClick = (id: number) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      userId: this.state.users.userId,
      title: this.state.users.title,
      body: this.state.users.body,
    });
  };

  handleDeleteClick = (id: number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      alert("user has been deleted")
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response.data);
        const users = response.data;
        this.setState({
          users: users,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { userId, name, body } = this.state;
    return (
      <div>
        <Button onClick={this.handleAllUserClick}>Get All User</Button>
        <Button onClick={this.handleNewUserClick}>Add New User</Button>
        <Dialog open={this.state.isOpen}>
          <DialogTitle>Enter User Details</DialogTitle>
          <DialogContent>
            <form onSubmit={this.submitHandler}>
              <TextField
                placeholder="Enter UserId"
                name="userId"
                value={userId}
                onChange={this.changeHandler}
              ></TextField>
              <TextField
                placeholder="Enter Name"
                name="title"
                value={name}
                onChange={this.changeHandler}
              ></TextField>
              <TextField
                placeholder="Enter Username"
                name="body"
                value={body}
                onChange={this.changeHandler}
              ></TextField>
              <DialogActions>
                <Button onClick={this.handleNewUserClick}>Cancel</Button>
                <Button type="submit">Add Details</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
        {this.state.users.map((user: any) => (
          <div
            style={{
              border: "2px solid grey",
              justifyContent: "space-evenly",
              display: "flex",
              height: "50px",
              width: "90%",
              margin: "auto",
              marginTop: "5px",
            }}
            key={user.id}
          >
            <Button onClick={() => this.handleEditClick(user.id)}>Edit</Button>
            <div
              style={{
                border: "2px solid grey",
                height: "40px",
                width: "800px",
                margin: "auto",
              }}
            >
              {user.title}
            </div>
            <Button onClick={() => this.handleDeleteClick(user.id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default GetRequest;
