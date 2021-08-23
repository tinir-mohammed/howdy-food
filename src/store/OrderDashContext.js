import React, {createContext, useState} from 'react'
import {firestore} from '../firebase/firebase.utils.js'

export const OrderDashContext = createContext()

const OrderDashProvider = ({children}) => {
  const [orders, setOrders] = useState([])

  const getOrders = async(restaurant, status) => {
    const foodRef = await firestore
      .collection("orders")
      .where("status", "==", status)
      .where("restaurant_id", "==", restaurant)
      .where("date", "==", getTimeDate().date)
    foodRef.onSnapshot((snapshot) => {
      const foods = [];
      snapshot.docs.forEach((doc) => {
        foods.push(doc.data());
      });
      setOrders(foods);
    });
  }

  const changeOrderStatus = (order, id, newStatus) => {
    firestore.collection("orders").doc(id).update({
      ...order, status: newStatus
    })
    .then(function() {
        console.log("Document successfully updated!");
    });
    console.log(id)
  }

  const getTimeDate = () => {
    const date = new Date()
    return {
      date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
      time: `${date.getHours()}:${date.getMinutes()}`
    }
  }
  return (
    <OrderDashContext.Provider value={{orders, getOrders, changeOrderStatus}}>
      {children}
    </OrderDashContext.Provider>
  )
}

export default OrderDashProvider
