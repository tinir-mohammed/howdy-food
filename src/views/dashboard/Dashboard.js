import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { dashboardRoutes } from "../../router";

import { AuthContext } from "../../store/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Switch>
        {user ? (
          <>
            {dashboardRoutes.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
          </>
        ) : <Redirect to="/login" />
        }
      </Switch>
    </div>
  );
};

export default Dashboard;
