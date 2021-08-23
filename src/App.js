import React, { useContext,useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Login from "./views/Login";
import RestaurantFood from "./views/RestaurantFood";
import Dashboard from "./views/dashboard/Dashboard";
import { AuthContext } from "./store/AuthContext";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  toolbarpadding: {
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const App = ({history}) => {
  const currentRoute = history.location.pathname
  const classes = useStyles();
  const {user, checkUser} = useContext(AuthContext);
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <>
    <div className={classes.root}>
      {<Navigation />}
      <main className={classes.content}>
        <div className={clsx(classes.toolbar, classes.toolbarpadding)} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Contact} />
          <Route
            path="/signup"
            render={() =>
              user ? <Redirect to="/dashboard/menus" /> : <Signup />
            }
          />
          <Route
            path="/login"
            render={() =>
              user ? <Redirect to="/dashboard/menus" /> : <Login />
            }
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/restaurant/:id" component={RestaurantFood} />
        </Switch>
      </main>
    </div>
    {currentRoute.includes("dashboard") ? null : currentRoute.includes('login')? null : currentRoute.includes('signup') ? null:
    <Footer />
    }
    </>
  );
};

export default withRouter(App);
