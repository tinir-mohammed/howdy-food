import React, { useContext, useState } from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import UserInfo from "../../components/Profile/UserInfo";
import ProfileData from "../../components/Profile/ProfileData";
import ProfileChart from "../../components/Profile/ProfileChart"

import { auth } from "../../firebase/firebase.utils";

import { AuthContext } from "../../store/AuthContext";
import EditProfile from "../../components/Profile/EditProfile";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const history = useHistory()
  const { user, signOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  // TODO:Fix signout funtion
  const logOut = async () => {
    signOut(() => history.replace('/'))
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <UserInfo signout={logOut} handleOpen={handleOpen}/>
          <ProfileData />
          <ProfileChart/>
        </Grid>
      </Grid>
      <EditProfile open={open} handleClose={handleClose} />
    </div>
  );
}
