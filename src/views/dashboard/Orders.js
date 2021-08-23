import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { AuthContext } from "../../store/AuthContext";
import OrderTab from "../../components/Order/OrderTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function RestaurantFood() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {user} = useContext(AuthContext);

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
          <Tab label="Just In"  {...a11yProps(0)} />
          <Tab label="Preparing" {...a11yProps(1)} />
          <Tab label="Ready" {...a11yProps(2)} />
          <Tab
            label="Served"
            {...a11yProps(3)}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <OrderTab restaurant={user.id} status="Sent" newStatus="Preparing" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderTab restaurant={user.id} status="Preparing" newStatus="Ready" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderTab restaurant={user.id} status="Ready" newStatus="Served" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OrderTab restaurant={user.id} status="Served" newStatus="Served" />
      </TabPanel>
    </div>
  );
}
