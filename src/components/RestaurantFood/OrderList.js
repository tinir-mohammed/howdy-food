import React, { useState, useContext, useEffect } from "react";
import {
  Paper,
  Box,
  IconButton,
  Button,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Card,
  CardContent,
  TextField,
  Grid,
  Typography
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import {firestore} from "../../firebase/firebase.utils.js"
import { OrderContext } from "../../store/OrderContext";

export default function OrderList({restaurant_id}) {
  const [showAlert, setShowAlert] = useState(false)
  const [orderId] = useState(uuidv4());
  const { orderList, deleteOrder, totalPrice, getTimeDate, tableNo, setTableNo, showOrder, setShowOrder, orderNo, setOrderNo, disableOrderButton } = useContext(OrderContext);
  
  const submitOrder = () => {
    const orderDetails = { tableNo, orders: orderList, orderNumber: (Math.random()*10000).toFixed(0), status: "Sent", restaurant_id: restaurant_id, id: orderId, total: totalPrice,  ...getTimeDate()}
    
    if (tableNo !== "") {
      firestore.collection("orders").doc(orderDetails.id).set(orderDetails).then(() => {
        disableOrderButton()
        setOrderNo(orderDetails.orderNumber)
        setShowOrder(true)
        setTableNo("")
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card>
          <CardContent>
            {
              !showOrder ? (
                <TextField
                  id="standard-full-width"
                  label="Table"
                  style={{ margin: 8 }}
                  placeholder="Enter your Table number"
                  fullWidth
                  value={tableNo}
                  onChange={(e) => setTableNo(e.target.value)}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              ): (
                <Typography variant="subtitle" component="h3">
                  Your Order Number is {orderNo}
                </Typography>
              )
            }
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={8}>
        <TableContainer component={Paper}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Menu</TableCell>
                <TableCell align="right">Unit price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                {
                  !showOrder ? (<TableCell align="right">Remove</TableCell>) : <></>
                }
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderList.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.name}</TableCell>
                  <TableCell align="right">RM {order.price}</TableCell>
                  <TableCell align="right">{order.quantity}</TableCell>
                  {
                    !showOrder ? (
                      <TableCell align="right">
                        <IconButton onClick={() => deleteOrder(order)}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    ): <></>
                  }
                  <TableCell align="right">
                    RM {Number(order.price) * Number(order.quantity)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">RM{totalPrice}</TableCell>
              </TableRow>
            </TableBody>
            <Box m={4}>
              {
                !showOrder ? (
                  <Button onClick={submitOrder} variant="contained">
                    Make Order
                  </Button>
                ) : <></>
              }
            </Box>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
