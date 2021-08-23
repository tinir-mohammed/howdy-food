import React, { useContext } from "react";
import clsx from "clsx";
import { NavLink, withRouter } from "react-router-dom";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBar from "./SideBar";
import { utilityRoutes } from "../router";
import { AuthContext } from "../store/AuthContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarExpand: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${0}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    flexGrow: 1,
    color: "#fff",
    typography: theme.typography.h3,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navigation(props) {
  const { window, history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        className={
          history.location.pathname.includes("dashboard")
            ? classes.appBar
            : classes.appBarExpand
        }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="h6" className={classes.link}>
            <NavLink to="/" className={classes.link}>
              Howdy
            </NavLink>
          </Typography>
          <Hidden smDown>
            <div>
              {utilityRoutes.map((route, index) => {
                if (route.path === "/dashboard/profile" && user) {
                  return (
                    <Button
                      key={index}
                      to={route.path}
                      component={NavLink}
                      color="inherit"
                    >
                      {route.name}
                    </Button>
                  );
                }

                if (
                  (route.path === "/login" || route.path === "/signup") &&
                  user
                ) {
                  return null;
                } else {
                  return (
                    <Button
                      key={index}
                      to={route.path}
                      component={NavLink}
                      color="inherit"
                    >
                      {route.name}
                    </Button>
                  );
                }
              })}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      {history.location.pathname.includes("dashboard") ? (
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <SideBar />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <SideBar />
            </Drawer>
          </Hidden>
        </nav>
      ): null}
    </>
  );
}

export default withRouter(Navigation);
