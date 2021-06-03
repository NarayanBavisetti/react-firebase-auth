import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Forgotpassword from "./ForgotPassword";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import Users from "./Users";
import Header from "./Header";

function Main() {
  return (
    <React.Fragment>
      <AuthProvider>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/users" component={Users} />
        <Route exact path="/forgotpassword" component={Forgotpassword} />
      </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default Main;


