import React, { Component } from "react";

type MyProps = {};

type MyState = {
  money: any;
  value: any;
  salary: any;
  id: any;
};

class InputFields extends Component<MyProps, MyState> {
  state: any = {
    money: [],
    value: "",
  };
  handleOnchangeMoney = (e: any) => {
    this.setState({ value: e.target.value });
  };

  onAddMoney = (e: any) => {
    e.preventDefault();

    const obj = {
      salary: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ money: this.state.money.concat(obj) });
      this.setState({ value: "" });
    }
  };

  render() {
    console.log(this.state.money, "Money Here");
    const myMoney = this.state.money.map((paise: any) => (
      <div>
        <h1>Salary :- {paise.salary}</h1>
        {paise.id}
      </div>
    ));
    return (
      <div
        style={{
          height: "100px",
          width: "200px",
          border: "2px solid grey",
          margin: "auto",
          marginTop: "80px",
        }}
      >
        <div>{myMoney}</div>
        <form onSubmit={this.onAddMoney}>
          <input
            type="number"
            placeholder="Please enter your money Here..."
            value={this.state.value}
            onChange={this.handleOnchangeMoney}
          ></input>
          <button onClick={this.onAddMoney}>Add money</button>
        </form>
      </div>
    );
  }
}

export default InputFields;
