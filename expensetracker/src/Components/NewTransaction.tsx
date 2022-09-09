import React, { Component } from "react";

type MyProps = {};

type MyState = {
  money: any;
  value: any;
  salary: any;
  id: any;
  reason: any;
};

class NewTransaction extends Component<MyProps, MyState> {
  state: any = {
    money: [],
    value: "",
    
  };
  handleOnchangeMoney = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleOnchnageReason = (e: any) => {
    this.setState({ reason: e.target.value });
  };

  onAddMoney = (e: any) => {
    e.preventDefault();

    const obj = {
      salary: this.state.value,
      for: this.state.reason,
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
      <li>
        <h1>
          Salary :- {paise.salary}
          {paise.for}
        </h1>
        {paise.id}
      </li>
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
        <form onSubmit={this.onAddMoney}>
          <input
            type="number"
            placeholder="Please enter your money Here..."
            value={this.state.value}
            onChange={this.handleOnchangeMoney}
          ></input>
          <input
            value={this.state.reason}
            onChange={this.handleOnchnageReason}
          />
          <button onClick={this.onAddMoney}>Add money</button>
        </form>
        <ol>{myMoney}</ol>
      </div>
    );
  }
}

export default NewTransaction;

// import React, { Component } from "react";

// class NewTransaction extends Component {
//   state: any = {
//     newvalue: [],
//     amount: "",
//     for: "",
//   };

//   handleOnAddKharcheChange = (e: any) => {
//     this.setState({ amount: e.target.value });
//   };

//   handleOnAddKharchaReason = (e: any) => {
//     this.setState({ for: e.target.value });
//   };

//   handleOnKharcha = (e: any) => {
//     e.preventDefault();

//     const obj1 = {
//       kharcha: this.state.amount,
//       reason: this.state.for,
//       id: Date.now(),
//     };
//     if (this.state.amount !== "") {
//       this.setState({ newValue: this.state.newvalue.concat(obj1) });
//       this.setState({ amount: "" });
//     }
//   };

//   render() {
//     console.log(this.state.newValue, "Kharchas here");
//     const newExpense = this.state.newvalue.map((kharch: any) => (
//       <li>
//         <h1>Salary</h1>
//         {kharch.kharcha}
//         {kharch.reason}
//         {kharch.id}
//       </li>
//     ));
//     return (
//       <div
//       // style={{
//       //   height: "300px",
//       //   width: "200px",
//       //   border: "2px solid grey",
//       //   marginTop: "80px",
//       //   margin: "auto",
//       // }}
//       >
//         <form onSubmit={this.handleOnKharcha}>
//           <h5>New transaction</h5>
//           <input
//             onChange={this.handleOnAddKharcheChange}
//             // type="number"
//             value={this.state.amount}
//             placeholder="Enter Amount"
//           />
//           <input
//             onChange={this.handleOnAddKharchaReason}
//             value={this.state.for}
//             placeholder="Enter Reason"
//           />
//           <button onClick={this.handleOnKharcha}>Paid</button>
//         </form>
//         <ol>{newExpense}</ol>
//       </div>
//     );
//   }
// }

// export default NewTransaction;
