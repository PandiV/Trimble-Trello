import React, { Suspense } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Loader from "components/Loader";
import routes from "./route.config";

const authPath = "/login";

const Routes = ({ isAuthenticated }) => {
  return (
    <Suspense fallback={<Loader />}>
      <HashRouter basepath="/">
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              render={props => {
                if (route.authentication && route.path !== authPath) {
                  if (isAuthenticated) {
                    return <route.component {...props} routes={route.routes} />;
                  }
                  if (!isAuthenticated) return <Redirect to="/login" />;
                }
                if (!route.authentication) {
                  if (route.path === authPath) {
                    if (isAuthenticated) return <Redirect to="/home" />;
                    if (!isAuthenticated) return <route.component {...props} />;
                  } else if (route.default) {
                    if (isAuthenticated) return <Redirect to="/home" />;
                    if (!isAuthenticated) return <Redirect to="/login" />;
                  } else {
                    return <route.component {...props} />;
                  }
                }
              }}
            />
          ))}
        </Switch>
      </HashRouter>
    </Suspense>
  );
};

export default React.memo(Routes);
