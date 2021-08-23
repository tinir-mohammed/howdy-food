import React, { createContext, useState, useEffect } from "react";
import { auth, createRestaurantProfile } from "../firebase/firebase.utils";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const checkUser = async () => {
    auth.onAuthStateChanged(async (User) => {
      if (User) {
        const userRef = await createRestaurantProfile(User);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });
  };

  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      error.code === "auth/wrong-password"
        ? setErrorMessage(
            "The password is invalid or the user does not have a password."
          )
        : error.code === "auth/user-not-found"
        ? setErrorMessage(
            "There is no user record corresponding to this identifier."
          )
        : setErrorMessage("Internal server error");
    }
  };

  const signOut = async (reroute) => {
    await auth.signOut();
    await setUser(null);
    reroute();
  };
  // useEffect(() => {
  //   checkUser();
  // }, []);
  return (
    <AuthContext.Provider
      value={{ user, signIn, checkUser, signOut, errorMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
