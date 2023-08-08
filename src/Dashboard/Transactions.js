import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

const { rows } = require('../data/TransactionData.js');

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Transactions() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Monthly Categories</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Expense</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.expense}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
