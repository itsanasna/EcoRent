import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { useContext, useState, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import LoadingScreen from './LoadingScreen';

const AuthRoute = ({ component: AuthorizeComponent, ...allProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const user = useContext(UserContext);

  if (loading) {
    LoadingScreen()
  }

  return (
    <Route
      {...allProps}
      render={(routeProps) =>
        user ? (
          <AuthorizeComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default AuthRoute;
