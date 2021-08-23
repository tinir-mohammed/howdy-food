import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Collapse,
} from "@material-ui/core";
import {
  AccountBox,
  Fastfood,
  AccountBalanceWallet,
  StarRate,
  RoomService,
  ExpandLess,
  ExpandMore,
  Inbox,
} from "@material-ui/icons";
import { dashboardRoutes, utilityRoutes } from "../router";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));

const icon = (name) => {
  if (name === "Profile") {
    return <AccountBox />;
  } else if (name === "Menus") {
    return <Fastfood />;
  } else if (name === "Ledger") {
    return <AccountBalanceWallet />;
  } else if (name === "Ratings") {
    return <StarRate />;
  } else {
    return <RoomService />;
  }
};
const SideBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={classes.toolbar} />
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Menu" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {utilityRoutes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className={classes.link}
              >
                <ListItem button>
                  {/* <ListItemIcon>{icon(route.name)}</ListItemIcon> */}
                  <ListItemText primary={route.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {dashboardRoutes.map((route) => (
          <NavLink to={route.path} key={route.path} className={classes.link}>
            <ListItem button>
              <ListItemIcon>{icon(route.name)}</ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
