import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, path, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
}

export function login(token) {
  localStorage.setItem("user", token);
}

export function logout() {
  localStorage.removeItem("user");
}

export function getToken() {
  return localStorage.getItem("user");
}

export function isLoggedIn() {
  const loggedIn = localStorage.getItem("user") !== null;
  return loggedIn;
}

export function getUser() {
  if (isLoggedIn() === false) return {};
  try {
    const user = localStorage.getItem("user");
    return user;
  } catch (e) {
    return false;
  }
}
