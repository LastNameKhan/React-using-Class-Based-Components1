import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

// interface Props {
//   createContext
// }

type Mystate = {


}

type MyProps = {

  
}

const AuthContext = React.createContext(null) as any;
//Auth Context is going to hold two components 
//Provider is going to wrap our data as the value that we want to provide
//Consumer Component which is going to consume the data that is being provided to us.
export class AuthProvider extends Component {
  state = {
    id: "",
    name: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const validationStatus = this.validateForm();
    if (validationStatus === false) {
      alert("Please fill all the required fields");
    }
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

  render() {
    const { name, number, email, password, confirmpassword } = this.state;
    const { onSubmit, validateForm } = this;
    return (
      <AuthContext.Provider
        value={{ name, number, email, password, confirmpassword }}
      >
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
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContext;
