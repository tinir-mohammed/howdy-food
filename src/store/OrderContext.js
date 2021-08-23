import React, { useState, createContext, useEffect } from "react";
import { firestore } from "../firebase/firebase.utils";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [showOrder, setShowOrder] = useState(false)
  const [tableNo, setTableNo] = useState("")
  const [orderNo, setOrderNo] = useState()
  const [orderBtn, setOrderBtn] = useState(false)

  const displayFood = async (restaurant, type) => {
    const foodRef = await firestore
      .collection("menus")
      .where("type", "==", type)
      .where("restaurant_id", "==", restaurant);
    foodRef.onSnapshot((snapshot) => {
      const foods = [];
      snapshot.docs.forEach((doc) => {
        foods.push(doc.data());
      });
      setState(foods);
    });
  };

  const disableOrderButton = () => {
    setOrderBtn(true)
  }

  const addToOrderList = (order) => {
    const Foods = [...orderList, order];
    setOrderList(Foods);
  };
  const deleteOrder = (food) => {
    const newOrder = [...orderList];
    setOrderList(newOrder.filter((newOrd) => newOrd.id !== food.id));
  };
  const decreaseQuantity = (food) => {
    setCount(count - 1);
  };
  const increaseQuantity = (food) => {
    setCount(count + 1);
  };

  const getOrderStatus = async (orderNo, restaurant) => {
    const foodRef = await firestore
      .collection("orders")
      .where("restaurant_id", "==", restaurant)
      .where("orderNumber", "==", orderNo)
    foodRef.onSnapshot((snapshot) => {
      const order = [];
      snapshot.docs.forEach((doc) => {
        order.push(doc.data());
        setOrder(doc.data())
      });
    });
  }

  const getTotal = (order) => {
    if (orderList.length > 0) {
      const total = order.map(food => food.price * food.quantity).reduce((acc, price) => acc + price)
      setTotalPrice(total)
    }
  }

  const getTimeDate = () => {
    const date = new Date()
    return {
      date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
      time: `${date.getHours()}:${date.getMinutes()}`
    }
  }

  useEffect(() => {
    getTotal(orderList)
  }, [orderList])
  
  return (
    <OrderContext.Provider
      value={{
        orders: state,
        orderList,
        order,
        count,
        totalPrice,
        tableNo,
        showOrder,
        orderNo,
        orderBtn,
        displayFood,
        addToOrderList,
        deleteOrder,
        increaseQuantity,
        decreaseQuantity,
        getOrderStatus,
        getTimeDate,
        setTableNo,
        setShowOrder,
        setOrderNo,
        disableOrderButton
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
