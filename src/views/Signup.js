import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  FormControl,
  TextField,
  Hidden,
  Button,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

import { auth, createRestaurantProfile } from "../firebase/firebase.utils";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardSpacing: {
    padding: 40,
    width: 100,
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  form: {
    padding: 10,
  },
  input: {
    marginBottom: 20,
  },
  background: {
    background: `url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const SignUp = () => {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const createRestaurant = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createRestaurantProfile(user, { name, phone: number });
      await history.replace("/dashboard/profile");
    } catch (error) {
      error.code === "auth/email-already-in-use"
        ? setErrorMessage(
            "The email address is already in use by another account"
          )
        : error.code === "auth/weak-password"
        ? setErrorMessage("Password should be at least 6 characters")
        : setErrorMessage("Internal server error");
    }
    // await auth.createUserWithEmailAndPassword(email, password);
  };
  return (
    <Grid container>
      <Grid item md={4}>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            {errorMessage && (
              <Alert variant="filled" severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
              </Alert>
            )}
            <br />
            <FormControl fullWidth className={classes.input}>
              <TextField
                label="Name of Restaurant"
                type="name"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth className={classes.input}>
              <TextField
                label="Email"
                type="email"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth className={classes.input}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth className={classes.input}>
              <TextField
                label="Number"
                type="number"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormControl>
            <Button
              className={classes.input}
              variant="contained"
              color="primary"
              fullWidth
              onClick={createRestaurant}
            >
              Sign up
            </Button>
            <Button
              className={classes.input}
              variant="contained"
              color="primary"
              onClick={() => history.push("/login")}
              fullWidth
            >
              Log in
            </Button>
          </form>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item md={8}>
          <div className={classes.background}></div>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default SignUp;
