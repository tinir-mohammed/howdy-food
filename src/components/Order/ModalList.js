import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, Paper, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  root: {
    width: 400,
    padding: 10
  },
  paper: {
    margin: 10,
    padding: 20,
    // display: 'flex',
    // justifyContent: 'space-between',
    width: '150%'
  },
  title: {
    fontSize: 14,
    textAlign: 'center' 
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ModalList(props) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.root}>
        <Typography className={classes.title} component="h4" variant="button"> OrderNumber: {props.orders.orderNumber}</Typography>
        {
          props.orders.orders.map((order, index) => (
            <Paper className={classes.paper} key={order.id}>
              <Typography component="h1" variant="button" >{index + 1} {order.name}</Typography>
              <Typography component="h1" variant="button">Quantity: {order.quantity}</Typography>
              <Typography component="h1" variant="button">Comment: {order.comment || `No comments`}</Typography>
            </Paper>
          ))
        }
        <CardActions>
          {props.orderAction}
        </CardActions>
      </Card>
    </div>
  );
}
