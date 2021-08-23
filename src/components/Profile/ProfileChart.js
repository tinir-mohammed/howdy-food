import React from 'react'
import {Card, Grid} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import Line from "./Line"
import Pie from "./Pie"

const useStyles = makeStyles({
  root: {
    padding: 15,
    height: 350
  }
})

const ProfileChart = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={7}>
        <Card className={classes.root}>
          <Line/>
        </Card>
      </Grid>
      <Grid item md={5}>
        <Card className={classes.root}>
          <Pie/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProfileChart
