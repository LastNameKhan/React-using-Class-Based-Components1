import React, { Component } from "react";
import AuthContext, { AuthProvider } from "./Context/AuthContext";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

// interface User {
//   name: string;
//   number: number;
//   email: string;
//   password: string;
//   confirmpassword: string;
// }


export default class Homepage extends Component {
  const { name, number, email, password, confirmpassword } = this.context;
  render() {
    return (
      <div>
        <h1>User Data Application</h1>
        <AuthProvider>
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
                {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AuthProvider>
      </div>
    );
  }
}

