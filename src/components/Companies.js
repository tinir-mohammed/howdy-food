import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  companies: {
    padding: "50px 24px"
  },
  company_icon:{
    height: "60px",
    minWidth: "120px",
    borderRadius: "10px",
    backgroundColor: "#E5E5E5",
    margin: "20px",
  },
}));

const Companies = () => {
  const classes = useStyles();
  return (
      <section className={classes.companies}>
        <Typography style={{fontSize: "50px", margin: "20px 0", fontWeight: 200}} align={"center"} component="h2">
          You’re in good company
        </Typography>
        <Typography style={{fontSize: "30px", margin: "20px 0", fontWeight: 200}} align={"center"} component="h2">
          used by
        </Typography>
        <Grid  container justify={'center'} alignItems={"center"}>
          <div className={classes.company_icon}></div>
          <div className={classes.company_icon}></div>
          <div className={classes.company_icon}></div>
          <div className={classes.company_icon}></div>
        </Grid>
      </section>
  );
};

export default Companies;
