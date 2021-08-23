import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {
    Typography,
  } from "@material-ui/core";

const backgroundImage = 'https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '90vh',
        marginTop: '-50px',
      },
      container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        zIndex: -1,
      },
      background1: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
      },
      arrowDown: {
        position: 'absolute',
        bottom: theme.spacing(4),
      },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: '#7fc7d9',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Hero(props) {
  const { classes } = props;

  return (
        <section className={classes.root}>
      <Container className={classes.container}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h3" className={classes.h5}>
        Get rid of the traditional menu
      </Typography>
      <Link to='/signup'>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
      >
        Join Today
      </Button>
      </Link>
        <div className={classes.backdrop} />
        <div className={clsx(classes.background1, classes.background)} />
      </Container>
    </section>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);