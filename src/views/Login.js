import React, { useState, useContext } from "react";
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
import { AuthContext } from "../store/AuthContext";

import { auth } from "../firebase/firebase.utils";

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "76vh",
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

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const { signIn, errorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn = async () => {
    signIn(email, password);
    history.push("dashboard/profile");
  };
  return (
    <Grid container>
      <Hidden smDown>
        <Grid item md={8}>
          <div className={classes.background}></div>
        </Grid>
      </Hidden>
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
                label="E-mail"
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
            <Button
              className={classes.input}
              variant="contained"
              color="primary"
              fullWidth
              onClick={logIn}
            >
              Log in
            </Button>
            <Button
              className={classes.input}
              variant="contained"
              onClick={() => history.push("/signup")}
              color="primary"
              fullWidth
            >
              Create Account
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
