import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Container,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mapForm: {
        padding: "0 20px",
        margin: "50px 0"
    },
    map: {

    },
    form: {
        padding: "20px 50px",
        border: "1px solid #B3B3B3"
    }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <section style={{padding: "0 24px"}}>
        <Grid fluid container justify={'center'} alignItems={"center"} style={{marginTop: '50px'}}>
            <div className={classes.image}></div>
        </Grid>
        <Typography style={{fontSize: "50px", margin: "20px 0", fontWeight: 800}} align={"center"} component="h2">
            Customer Service
        </Typography>
        <Typography style={{fontSize: "30px", margin: "20px 0", fontWeight: 600}} align={"center"} component="h2">
            we are here for you 24/7
        </Typography>
        <Typography style={{fontSize: "30px", margin: "20px 0", fontWeight: 200}} align={"left"} component="h2">
            If you have any inquiries feel free to contact us and our representitives will entraintain your requests
        </Typography>
        <Grid fluid container justify={'center'} alignItems={"center"} style={{marginTop: '50px'}} className={classes.mapForm}>
            <Grid item xs={12} md={6} lg={6} className={classes.map}>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.form}>
                <Typography style={{fontSize: "25px", margin: "20px 0", fontWeight: 600}}  component="h2">
                    How can we help you today
                </Typography>
                <Grid container >
                    <Grid item xs={12} sm={6} style={{padding: "10px"}} >
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{padding: "10px"}} >
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                    </Grid>
                    
                    <Grid item xs={12} style={{padding: "10px"}}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item xs={12} style={{padding: "10px"}}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Contact Number"
                        fullWidth
                        autoComplete="phone number"
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item xs={12} style={{padding: "10px"}}>
                        <TextField
                        id="inquiry"
                        label="Type your inquiry here"
                        multiline
                        fullWidth
                        rows={5}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} style={{margin: "10px"}}>
                        <Button
                        color="primary"
                        variant="contained"
                        onClick={()=>{}}
                        >
                        Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </section>
  );
};

export default Contact;
