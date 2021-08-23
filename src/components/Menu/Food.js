import React, { useEffect, useState, useContext } from "react";
import { firestore } from "../../firebase/firebase.utils";
import { AuthContext } from "../../store/AuthContext";
import {Paper, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import MenuCard from "./MenuCard";

const useStyles = makeStyles(theme => (
  {
    paper: {
      padding: 20
    }
  }
))
const Food = ({type}) => {
  const [state, setState] = useState({ foods: [] });
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  console.log(user)
  useEffect(() => {
    const fetchData = async () => {
      const menuRef = await firestore
        .collection("menus")
        .where("type", "==", type)
        .where("restaurant_id", "==", `${user.id}`);
      menuRef.onSnapshot(async (snapshot) => {
        const foods = [];
        snapshot.docs.forEach((doc) => {
          foods.push(doc.data());
        });
        setState({ foods });
      });
    };
    fetchData();
  }, [type, user.id]);
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        {
          state.foods &&  state.foods.map((data, index) =>(
            <Grid item key={data.id} md={4} sm={2}>
              <MenuCard data={data} />
            </Grid>
          ))
        }
      </Grid>
    </Paper>
  );
};

export default Food;
