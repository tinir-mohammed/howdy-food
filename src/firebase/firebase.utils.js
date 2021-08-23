import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyTpF1s_P5eQi3rxDzV-ZNi_z6gLms5Uo",
  authDomain: "howdy-377df.firebaseapp.com",
  databaseURL: "https://howdy-377df.firebaseio.com",
  projectId: "howdy-377df",
  storageBucket: "howdy-377df.appspot.com",
  messagingSenderId: "570077570493",
  appId: "1:570077570493:web:ad1f74c2f862d0ca3f5ed4",
  measurementId: "G-L1L4VFT7YQ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createRestaurantProfile = async (
  restaurantAuth,
  additionalData
) => {
  if (!restaurantAuth) return;

  const restaurantRef = firestore.doc(`restaurants/${restaurantAuth.uid}`);
  const snapShot = await restaurantRef.get();

  if (!snapShot.exists) {
    const { email, uid } = restaurantAuth;
    const createdAt = new Date();
    try {
      await restaurantRef.set({
        id: uid,
        email,
        cover_image: "",
        profile_image: `https://api.adorable.io/avatars/285/${uid}.png`,
        location: "",
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating restaurant", error.message);
    }
  }
  return restaurantRef;
};

export const updateProfileData = async (restaurantId, incomingData) => {
  const userRef = firestore.doc(`restaurants/${restaurantId}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    try {
      await userRef.update({
        ...incomingData
      }); 
      return true;
    } catch (error) {
      console.log("error updating profile", error.message);
    }
  }
};

export const createMenu = async (menuData) => {
  const menuRef = await firestore.collection("menus").doc(`${menuData.id}`);
  try {
    await menuRef.set(menuData);
    return menuRef;
  } catch (error) {
    console.log("Error Creating Menu", error.message);
  }
};

export const updateMenu = async (menuData) => {
  const menuRef = await firestore.collection("menus").doc(`${menuData.id}`);
  try {
    await menuRef.update(menuData);
    return menuRef;
  } catch (error) {
    console.log("Error Updating Menu", error.message);
  }
};

export const deleteMenu = async (id) => {
  const menuRef = await firestore.collection("menus").doc(`${id}`);
  try {
    await menuRef.delete();
    return menuRef;
  } catch (error) {
    console.log("Error Deleting Menu", error.message);
  }
};

export default firebase;
