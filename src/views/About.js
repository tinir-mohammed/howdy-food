import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    about: {
        padding: "0 24px"
    },
    revolution: {
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        padding: "0 20px"
    },
    ceo_image: {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: "#B3B3B3"
    }
}));

const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.about}>
        <div className={classes.summary}>
            <Typography style={{fontSize: "18px", fontWeight: 800}} component="p">
                Foody Platform is an easy-to-use restaurant interactive platform that helps the community to increaseand raise the level of safety significantly, especially in light of the current situation that we areexperiencing while facing the Covid-19 pandemic by implementing a unique modern experience inrestaurants which is made possible with the digital menu as a precautionary procedure. As well asincreasing the level of service intelligence bringing the restaurants to the 21st century.
            </Typography>
        </div>
        <Grid fluid container justify={'flex-start'} alignItems={"center"} style={{marginTop: '50px'}}>
        <Grid item container direction={"column"} xs={12} md={2} lg={2} justify={'center'} alignItems={"center"}>
            <div className={classes.ceo_image}></div>
            <Typography style={{fontSize: "30px", fontWeight: 200}} component="h2" align={"center"}>
                Hamada Qal
            </Typography>
            <Typography style={{fontSize: "18px", fontWeight: "bold"}} align={"center"} component="h2">
                CEO
            </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={10} >
            <Typography style={{fontSize: "18px", fontWeight: 800}} component="h2">
                Words from our founder
            </Typography>
            <Typography style={{fontSize: "18px", fontWeight: 500}} component="p">
                Even the most basic change results in great outcomes. Here in Howdy we believe that it is timeto change the way food service industry handled their interactions with customers. It is time tocast aside the regular menu and cut back on cost and have a more sophisticated, advancedoutlets where safety comes first. Honestly, the amount of work that your staff needs to put intaking orders and going from table to another can be invested in other areas in your business!Our software solution will do that task for you.
            </Typography>
            <Typography style={{fontSize: "18px", fontWeight: 500}} component="p">
                Go for it. It is time for change. It is about time technology was infused into your business.
            </Typography>

        </Grid>
        </Grid>

        <section className={classes.revolution}>
            <Grid fluid container justify={'flex-start'} alignItems={"center"} style={{marginTop: "100px"}} >
            <Grid item xs={12} md={6} lg={6} spacing={3}>
                <Typography style={{fontSize: "20px", fontWeight: 600}} component="p">
                Lower your costs, and make more revenue.The time is now.
                </Typography>
                <Typography style={{fontSize: "20px", fontWeight: 600}} component="p">
                Be a part of change! Engage the future.
                </Typography>
            </Grid>
            <Grid container item xs={12} md={6} lg={6} spacing={3} justify={'flex-end'}>
                <Button color={'primary'}  variant="contained" onClick={()=>{}} className={classes.button_alt} >Join Today</Button>
            </Grid>
            </Grid>
        </section>
    </section>
  );
};

export default About;
