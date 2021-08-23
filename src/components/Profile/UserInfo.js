import React, { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import {useHistory} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography,
  Grid,
  Avatar,
  CardHeader,
} from "@material-ui/core";
import { Mail, StayCurrentPortrait, Place } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  box: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttons: {
    padding: theme.spacing(2)
  }
}));

export default function UserInfo(props) {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const viewRestaurant = () => {
    history.push(`/restaurant/${user.id}`)
  }
  return (
    <Grid container spacing={3}>
      <Grid item md={9}>
        <Card>
          <CardMedia
            className={classes.media}
            image={user.cover_image? user.cover_image : "https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg"}
            title="banner"
          />
          <CardContent>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.large}
                  src={user.profile_image? user.profile_image: "https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png"}
                />
              }
              title={user.name? user.name: "Pizzeria"}
              subheader="September 14, 2016"
            />
            <Grid container spacing={3}>
              <Grid item md={3}>
                <Mail />
                <Typography variant="button" color="textSecondary" component="h1">
                {user.email ?user.email:"pizzeria@gmail.com"}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <StayCurrentPortrait />
                <Typography variant="button" color="textSecondary" component="h1">
                  {user.phone? user.phone:"+601111335544"}
                </Typography>
              </Grid>
              <Grid item md={3} >
                <Place />
                <Typography variant="button" color="textSecondary" component="h1">
                  {user.location? user.location: "Ampang, KL"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3}>
        <Card className={classes.buttons}>
          <Box className={classes.box}>
            <Button color="secondary" variant="contained" fullWidth disableElevation onClick={props.signout}>Sign Out</Button>
            <Button color="primary" variant="contained" fullWidth disableElevation onClick={props.handleOpen}>Update Profile</Button>
            <Button color="primary" variant="contained" fullWidth disableElevation onClick={viewRestaurant}>Front View</Button>
            <Button color="primary" variant="contained" fullWidth disableElevation onClick={()=>history.push('/dashboard/menus')}>Menus</Button>
            <Button color="primary" variant="contained" fullWidth disableElevation onClick={()=>history.push('/dashboard/orders')}>Orders</Button>
            <Button color="primary" variant="contained" fullWidth disableElevation onClick={()=>history.push('/dashboard/ledger')}>Ledger</Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
