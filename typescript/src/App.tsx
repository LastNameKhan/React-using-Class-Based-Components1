import React from "react";
import "./App.css";
import Form from "./Comopnents/Todo/Form";
import AuthContext, {
  AuthProvider,
} from "./Comopnents/Todo/Context/AuthContext";

// interface User {
//   name: string;
//   number: number;
//   email: string;
//   password: string;
//   confirmpassword: string;
// }
class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Homepage />
        <h1>App Component</h1>
        <AuthProvider>
          <Child />
        </AuthProvider>
      </div>
    );
  }
}
class Child extends React.Component {
  static contextType = AuthContext;
  render() {
    // console.log(this.context)
    const { name, number, email, password, confirmpassword, login, logout } =
      this.context;
    return (
      <div>
        <h1>Child Component</h1>
        <h1>Name: {name}</h1>
        <h1>Number: {number}</h1>
        <h1>Email: {email}</h1>
        <h1>Password: {password}</h1>
        <h1>ConfirmPassword: {confirmpassword}</h1>
        <button onClick={login}>Log In</button>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
}

Child.contextType = AuthContext;
export default App;

//Material UI
//Form
//5 input fields 1.Name 2.mail 3.Number 4.Password 5.ConfirmPassword
//onClick submit
//Show data - Name mail and number
//Edit/Change/Delete
//onEdit :- Change the data and update.
//Delete the data.
//Learn firebase.
//Context api.
