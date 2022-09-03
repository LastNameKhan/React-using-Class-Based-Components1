import React, { Component } from "react";
import "./Form.css";
// import { v4 as uuid } from "uuid";
import {
  Button,
  TextField,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

type Mystate = {
  id: string;
  name: string;
  number: Number;
  email: string;
  password: string;
  confirmpassword: string;
  record: string[];
  formData: string[];
  user: string[];
  onsubmit: React.FormEvent<HTMLFormElement>;
  validatefomr: () => string | Boolean | Number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// interface UserData {
//   name: string,
//   number: Number,
//   email: String,
//   password: String,
//   confirmpassword: String,

// }
class Form extends Component<Mystate> {
    state = {
      name: "",
      number: "",
      email: "",
      password: "",
      confirmpassword: "",
      fromData: [],
      record: [],
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    const validationStatus = this.validateForm();
    const newRecord = {
      ...this.state.formData,
      id: new Date().getTime().toString(),
    };
    this.setState.record({ ...this.state.record, newRecord });
    if (validationStatus === false) {
      alert("Please fill all the required fields");
    }
    // rows.push(this.state);
    console.log(this.state);
  };

  validateForm = () => {
    const { number, email, password, confirmpassword } = this.state;

    let status = true;
    if (
      number.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmpassword.length === 0
    ) {
      status = false;
    }
    if (password != confirmpassword) {
      status = false;
    }
    return status;
  };
  // onEdit = (id) => {
  //   const tempuser = this.state.Alldata;
  //   const index = tempuser.indexOf(this.getRecord(id));
  //   const selectedRecord = tempuser[index];
  //   this.setState({
  //     id: selectedRecord["id"],
  //     name: selectedRecord["name"],
  //     number: selectedRecord["number"],
  //     email: selectedRecord["email"],
  //     password: selectedRecord["password"],
  //     confirmpassword: selectedRecord["confirmpassword"],
  //   });
  // };
  // updateValue = (e, test) => {
  //   if (test === "name") {
  //     this.state.title = e.target.value;
  //   }
  //   if (test === "number") {
  //     this.state.title = e.target.value;
  //   }
  //   if (test === "email") {
  //     this.state.title = e.target.value;
  //   }
  //   if (test === "password") {
  //     this.state.title = e.target.value;
  //   }
  //   if (test === "confirmpassword") {
  //     this.state.title = e.target.value;
  //   }
  //   const tempArr = [
  //     this.state.id,
  //     this.state.name,
  //     this.state.number,
  //     this.state.email,
  //     this.state.password,
  //     this.state.confirmpassword,
  //   ];
  //   this.setState({
  //     updateEdit: tempArr,
  //   });
  // };

  // onSave = (id) => {
  //   if (id !== "") {
  //     const SavedRecord = this.state.Alldata;
  //     const index = SavedRecord.indexOf(this.getRecord(id));
  //     const Record = SavedRecord[index];
  //     Record["name"] = this.state.updateEdit[1];
  //     Record["number"] = this.state.updateEdit[2];
  //     Record["email"] = this.state.updateEdit[3];
  //     Record["password"] = this.state.updateEdit[4];
  //     Record["confirmpassword"] = this.state.updateEdit[5];
  //     this.setState({
  //       Alldata: [...this.state.Alldata],
  //       id: "",
  //       name: "",
  //       number: "",
  //       email: "",
  //       password: "",
  //       confirmpassword: "",
  //     });
  //   } else {
  //     const MaxId = Math.max(...this.state.Alldata.map((item) => item.id));
  //     const id = MaxId + 1;
  //     const newArr = [];
  //     newArr["name"] = this.state.updateEdit[1];
  //     newArr["number"] = this.state.updateEdit[2];
  //     newArr["email"] = this.state.updateEdit[3];
  //     newArr["password"] = this.state.updateEdit[4];
  //     newArr["confirmpassword"] = this.state.updateEdit[5];
  //     this.setState({
  //       Alldata: [...this.state.Alldata, newArr],
  //       id: "",
  //       name: "",
  //       number: "",
  //       email: "",
  //       password: "",
  //       confirmpassword: "",
  //     });
  //   }
  // };
  // onDelete = (id) => {
  //   const tempuser = this.state.Alldata.filter((item) => item.id !== id);
  //   this.setState({
  //     Alldata: tempuser,
  //   });
  // };
  render() {
    const { name, number, email, password, confirmpassword } = this.state;
    return (
      <div>
        <h3>User Details</h3>
        <form onSubmit={this.onSubmit} className="formcontainer">
          <TextField
            label="Name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <TextField
            required
            label="Number"
            onChange={(e) => this.setState({ number: e.target.value })}
          />
          <TextField
            required
            label="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <TextField
            required
            label="Password"
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <TextField
            required
            label="Confirm Password"
            type="password"
            onChange={(e) => this.setState({ confirmpassword: e.target.value })}
          />
          <input type="submit"></input>
        </form>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Confirm Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.record.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.number}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.password}</TableCell>
                  <TableCell align="right">{user.password}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => this.onEdit(user.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => this.onDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Form;
