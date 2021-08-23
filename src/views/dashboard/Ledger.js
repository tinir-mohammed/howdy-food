import React, {useContext, useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {OrderDashContext} from '../../store/OrderDashContext'
import {AuthContext} from '../../store/AuthContext'

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [dailyTotal, setDailyTotal] = useState()
  const {getOrders, orders} = useContext(OrderDashContext)
  const { user } = useContext(AuthContext);

  const getTotal = (order) => {
    if (order.length > 0) {
      const total = order.map(food => food.total).reduce((acc, price) => acc + price)
      console.log(total)
      setDailyTotal(total)
    }
  }

  useEffect(() => {
    getOrders(user.id, 'Served')
    getTotal(orders)
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell component="th" scope="row">
                {order.tableNo} [{order.orderNumber}]
              </TableCell>
              <TableCell align="right">RM {order.total}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">RM{dailyTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
