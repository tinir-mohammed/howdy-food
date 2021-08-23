import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Tabs, Tab, Box, Typography, Modal, Fade} from '@material-ui/core';
import CreateMenu from "../../components/Menu/CreateMenu";
import Food from "../../components/Menu/Food";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Foods" {...a11yProps(0)} />
          <Tab label="Beverage" {...a11yProps(1)} />
          <Tab label="Desserts" {...a11yProps(2)} />
          <div>
            <Button style={{margin: 5}} color="primary" onClick={handleOpen}>
              Add Menu
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              className={classes.modal}
              onClose={handleClose}
              closeAfterTransition
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <CreateMenu handleClose={handleClose} />
                </div>
              </Fade>
            </Modal>
          </div>
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <Food type="Food"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Food type="Beverage"/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Food type="Dessert"/>
        </TabPanel>
      </div>
    </div>
  );
}
