import React, { Component } from "react";
import "./App.css";
import InputFields from "./Components/InputFields";
import NewTransaction from "./Components/NewTransaction";
import Navbar from "./Components/Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <NewTransaction /> */}
        {/* <InputFields /> */}
      </div>
    );
  }
}

export default App;
