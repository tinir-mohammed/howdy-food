import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button
} from "@material-ui/core";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  eatSafe: {
    padding: "50px 24px"
  },
  item: {
    margin: "20px 0"
  },
  button: {
    border: "1px solid #303F9F",
    backgroundColor: "transparent",
    lineHeight: "30px",
    fontSize: "12px",
    color: "#303F9F",
    fontWeight: 500,
    padding: "3px 30px",
  },
  button_alt: {
    border: "inherit",
    padding: "5px 30px",
    marginRight: "40px",
  },
  revolution: {
    minHeight: "250px",
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    padding: "0 20px"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <section className={classes.eatSafe}>
        <Typography style={{fontSize: "35px", margin: "20px 0"}} component="h2">
          Eat safely..
        </Typography>
        <Grid fluid container justify={'flex-start'} alignItems={"center"}>
          <Grid item xs={12} md={6} lg={6} spacing={3} className={classes.item} >
            <Typography style={{fontSize: "26px", fontWeight: 600 }} component="h1">
              QR menu
            </Typography>
            <br />            
            <Typography style={{fontSize: "17px"}} component="p">
              Your menu is just a scan away!
            </Typography>
            <Typography style={{fontSize: "17px"}} component="p">
              No more paper menu.
            </Typography>
            <br />
            <Button  variant="contained" textSizeSmall onClick={()=>{}} className={classes.button} >Learn more</Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6} spacing={3} className={classes.item}>
            <Typography style={{fontSize: "26px", fontWeight: 600 }} component="h1">
              Variety of options
            </Typography>
            <br />            
            <Typography  style={{fontSize: "17px"}} component="p">
              Dine-in or Take-out
            </Typography>
            <Typography  style={{fontSize: "17px"}} component="p">
              Your customers can have their way
            </Typography>
            <br />
            <Button  variant="contained" onClick={()=>{}} className={classes.button} >Learn more</Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6} spacing={3} className={classes.item}>
            <Typography style={{fontSize: "26px", fontWeight: 600 }} component="h1">
              Order Tracking
            </Typography>
            <br />            
            <Typography  style={{fontSize: "17px"}} component="p">
              Customers can easily track their order status.
            </Typography>
            <Typography  style={{fontSize: "17px"}} component="p">
              Step by step until it is delivered to their tables.
            </Typography>
            <br />
            <Button  variant="contained" onClick={()=>{}} className={classes.button} >Learn more</Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6} spacing={3} className={classes.item}>
            <Typography style={{fontSize: "26px", fontWeight: 600 }} component="h1">
              Customer Feedback
            </Typography>
            <br />            
            <Typography  style={{fontSize: "17px"}} component="pre">
              Clients can share their experience with you.
            </Typography>
            <Typography  style={{fontSize: "17px"}} component="p">
              They can comment, rate, and make suggestions.
            </Typography>
            <br />
            <Button  variant="contained" onClick={()=>{}} className={classes.button} >Learn more</Button>
          </Grid>
        </Grid>
      </section>
      <Companies />
      <section className={classes.revolution}>
        <Grid fluid container justify={'flex-start'} alignItems={"center"}>
          <Grid item xs={12} md={6} lg={6} spacing={3}>
            <Typography style={{fontSize: "30px", fontWeight: 200}} component="p">
              Revolutionalize your whole dining experience. 
            </Typography>
            <Typography style={{fontSize: "30px", fontWeight: 200}} component="p">
              Promotoing safety
            </Typography>
          </Grid>
          <Grid container item xs={12} md={6} lg={6} spacing={3} justify={'center'}>
            <Button color={'primary'}  variant="contained" onClick={()=>{}} className={classes.button_alt} >Join Today</Button>
            <Button  variant="contained" onClick={()=>{}} className={classes.button} >Contact Us</Button>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Home;
