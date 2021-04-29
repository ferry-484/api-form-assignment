import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Details from "./Components/Details";
import Reset from "./Components/Reset";
import NewPassword from "./Components/NewPassword";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

      <Route
          exact={true}
          path="/new"
          component={NewPassword}
          render={(e, props) => <NewPassword {...e} data={props} />}
        />

      <Route
          exact={true}
          path="/reset"
          component={Reset}
          render={(e, props) => <Reset {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/user"
          component={Details}
          render={(e, props) => <Details {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/signup"
          component={SignUp}
          render={(e, props) => <SignUp {...e} data={props} />}
        />

        <Route
          exact={true}
          path="/" // always loads first
          component={Login}
          render={(e, props) => <Login {...e} data={props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
