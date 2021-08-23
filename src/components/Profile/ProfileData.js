import React from "react";
import {makeStyles} from '@material-ui/styles'
import { Card, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1)
  },
  data: {
    textAlign: 'center'
  }
}))

export default function ProfileData() {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      {
        [1, 2, 3, 4].map(value=> (
          <Grid item key={value} md={3}>
            <Card className={classes.card}>
              <Typography className={classes.data} component="h1" variant="h2">{value}</Typography>
              <Typography className={classes.data} variant="button" component="h1">Orders</Typography>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}
