import React, { useState, useContext } from "react";
import { Card, Typography, Button, ButtonGroup, Grid, TextField, CardMedia, Modal, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Comment } from "@material-ui/icons";
import { OrderContext } from "../../store/OrderContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    flexGrow: 1,
    width: "100%",
  },
  alignment: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    display: "flex",
    justifyContent: "center",
  },
  bordering: {
    borderWidth: 3,
    borderColor: "red",
    borderStyle: "solid",
    width: "100%",
  },
  media: {
    height: 140,
  },
  button: {
    marginBottom: 10,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textarea: {
    width: '100%'
  },
}));

const FoodCard = ({ menu, addToOrderList }) => {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [comment, setComment] = useState("")
  const [open, setOpen] = useState(false);
  const {orderBtn} = useContext(OrderContext)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const getOrder = () => {
    addToOrderList({ ...menu, quantity: count, comment: comment  });
  };
  const decreaseQuantity = (food) => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const increaseQuantity = (food) => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={menu.image}
          title={menu.name}
        />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography
              className={classes.alignment}
              variant="button"
              component="h5"
            >
              {menu.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              className={classes.alignment}
              variant="button"
              component="h4"
            >
              RM {menu.price}
            </Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ButtonGroup size="small" fullWidth disableElevation color="primary">
                <Button onClick={decreaseQuantity}>-</Button>
                <Button disabled>{count}</Button>
                <Button onClick={increaseQuantity}>+</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
                startIcon={<Comment />}
                onClick={handleOpen}
              >
                Comment
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Button
                onClick={getOrder}
                fullWidth
                color="primary"
                variant="contained"
                size="small"
                disabled={orderBtn}
              >
                Order
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <form>
                      <div>
                        <TextField
                          fullwidth
                          id="outlined-multiline-static"
                          label="Comment"
                          multiline
                          rows={4}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          variant="outlined"
                          helperText="for example, no sugar, no spice, small salt"
                        />
                      </div>
                      <Button color="primary" onClick={handleClose}>Done</Button>
                      
                    </form>
                  </div>
                </Fade>
              </Modal>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default FoodCard;
