import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3F51B5",
    minHeight: "250px",
    padding: "50px 20px"
  },
  fotterLinkWrapper: {
    boxShadow: "0px 3px 6px #00000029",
    padding: "50px 10px"
  },
  footerLink: {
    color: "#ffffff",
    textDecoration: "none",
    padding: "0px 30px"
  },
  ico:{
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    margin: "5px",
  },
  
}));

const Footer = () => {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
        <Grid fluid container justify={'center'} alignItems={"center"} className={classes.fotterLinkWrapper}>
          <Grid container item xs={12} lg={4} spacing={3} justify={'flex-start'} alignItems={"center"}>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "15px", fontWeight: 500}} component="p">
                    Mobile App
                </Typography>
            </Link>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "15px", fontWeight: 500}} component="p">
                    Services
                </Typography>
            </Link>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "15px", fontWeight: 500}} component="p">
                    Company 
                </Typography>
            </Link>
          </Grid>
          <Grid container item xs={12}  lg={4} spacing={3} justify={'center'}>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "20px", fontWeight: 600, padding: "0"}} component="p">
                    Howdy
                </Typography>
            </Link>
          </Grid>
          <Grid container item xs={12} lg={4} spacing={3} justify={'flex-end'} alignItems={"center"}>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "15px", fontWeight: 500}} component="p">
                    Help
                </Typography>
            </Link>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "15px", fontWeight: 500}} component="p">
                    Blog
                </Typography>
            </Link>
            <Link to="/" className={classes.footerLink} >
                <Typography style={{fontSize: "15px", fontWeight: 500}} component="p">
                    Resourses
                </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid fluid container justify={'center'} alignItems={"center"} style={{marginTop: '50px'}}>
          <div className={classes.ico}></div>
          <div className={classes.ico}></div>
          <div className={classes.ico}></div>
          <div className={classes.ico}></div>
        </Grid>
        <Typography style={{fontSize: "15px", fontWeight: 500, color: "#ffffff"}} component="p" align={'center'}>
            &copy;{' '} Howdy, Inc. {new Date().getFullYear()}. Eat Safely!
        </Typography>
      </footer>
  );
};

export default Footer;
