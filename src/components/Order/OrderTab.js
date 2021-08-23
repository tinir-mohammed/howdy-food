import React, { useEffect, useContext } from "react";
import {
  Accordion, AccordionSummary, Typography, AccordionDetails, Button
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { OrderDashContext } from '../../store/OrderDashContext'
import { makeStyles } from "@material-ui/core/styles";
import { firestore } from '../../firebase/firebase.utils'
import ModalList from "./ModalList"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const JustIn = ({ restaurant, status, newStatus }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { getOrders, orders, changeOrderStatus } = useContext(OrderDashContext)

  const orderAction = (order) => {
    return (
      <Button color="primary" onClick={() => changeOrderStatus(order, order.id, newStatus)}>Go to Next</Button>
    )
  }
  useEffect(() => {
    getOrders(restaurant, status)
  }, [])
  return (
    <div className={classes.root}>
      {
        orders.map(order => (
          <Accordion expanded={expanded === order.id} onChange={handleChange(order.id)} key={order.id}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography className={classes.heading}>{order.tableNo}</Typography>
              <Typography className={classes.secondaryHeading}>{order.status}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ModalList orders={order} orderAction={orderAction(order)}/>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
};

export default JustIn;
