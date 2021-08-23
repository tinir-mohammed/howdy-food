import React, { createContext } from "react";
import { db } from "../firebase";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const createMenu = (newMenu) => {
    db.collection("menus")
      .add(newMenu)
      .then((doc) => {
        console.log("document id is: ", doc.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <MenuContext.Provider value={{ createMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
