import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, hostel, calories, bed) {
  return { name, hostel, calories, bed };
}

const rows = [
  createData("Faith", "A-hostel", 1, 3),
  createData("Eunice", "D-hostel", 4, 5),
  createData("Beryl", "F-hostel", 2, 4),
  createData("Darryl", "B-hostel", 6, 4),
  createData("Sam", "A-hostel", 6, 4),
  createData("Larry", "C-hostel", 3, 4),
];

export default function BookedStudent() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Hostel Name</TableCell>
            <TableCell>Booked Room</TableCell>

            <TableCell>Bed No.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.hostel}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.bed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
