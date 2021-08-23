import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { deleteMenu } from "../../firebase/firebase.utils";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Modal,
  Fade,
} from "@material-ui/core";
import EditMenu from "./EditMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 20,
    padding: 10
  },
  media: {
    height: 140,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MediaCard({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteMenuhandler = () => {
    deleteMenu(data.id);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            data.image
              ? data.image
              : "https://material-ui.com/static/images/cards/paella.jpg"
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="button" component="h6">
                {data.name ? data.name : "Chocolate Chesecake"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="button" component="h6">
                RM {data.price ? data.price : 10}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button disableElevation fullWidth size="small" variant="contained" color="primary" onClick={handleOpen}>
              Edit
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              className={classes.modal}
              onClose={handleClose}
              closeAfterTransition
              // BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <EditMenu handleClose={handleClose} data={data} />
                </div>
              </Fade>
            </Modal>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              disableElevation
              size="small"
              variant="contained"
              color="secondary"
              onClick={deleteMenuhandler}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
