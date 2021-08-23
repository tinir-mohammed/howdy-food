import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../store/OrderContext";
import FoodCard from "./FoodCard";
import { Grid } from "@material-ui/core";

// Gw4bt7F8rbS99WxSetzQOtHQOcY2
const MenuTab = (props) => {
  const params = useParams();
  const { orders, displayFood, addToOrderList, orderList } = useContext(
    OrderContext
  );
  useEffect(() => {
    displayFood(params.id, props.type);
  }, []);
  return (
    <Grid container spacing={3}>
      {orders.map((order) => (
        <Grid item md={3} sm={6} key={order.id}>
          <FoodCard
            menu={order}
            addToOrderList={addToOrderList}
            orderList={orderList}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuTab;
