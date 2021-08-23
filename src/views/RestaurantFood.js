import React, { useContext } from "react";
import {useParams} from 'react-router-dom'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { Restaurant, LocalCafe, Cake, StarBorder, BookmarkBorder } from "@material-ui/icons";
import MenuTab from "../components/RestaurantFood/MenuTab";
import OrderStatus from "../components/RestaurantFood/OrderStatus";
import OrderList from "../components/RestaurantFood/OrderList";
import { OrderContext } from "../store/OrderContext";

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
  const { orderList, getOrderStatus, order } = useContext(OrderContext);
  const params = useParams()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Foods" icon={<Restaurant />} {...a11yProps(0)} />
          <Tab label="Beverages" icon={<LocalCafe />} {...a11yProps(1)} />
          <Tab label="Desserts" icon={<Cake />} {...a11yProps(2)} />
          <Tab
            label={`Your Orders ${orderList.length}`}
            icon={<StarBorder />}
            {...a11yProps(3)}
          />
          <Tab label="Order Status" icon={<BookmarkBorder />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MenuTab type="Food" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MenuTab type="Beverage" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MenuTab type="Dessert" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OrderList restaurant_id={params.id} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OrderStatus getOrderStatus={getOrderStatus} order={order} restaurant_id={params.id}/>
      </TabPanel>
    </div>
  );
}
