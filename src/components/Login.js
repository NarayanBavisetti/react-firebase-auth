import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../firebase";

const useStyles = makeStyles({
  input: {
    margin: "8px 0px",
  },
  size: {
    width: 350,
    height: "72vh",
    margin: "40px auto",
    padding: 20,
  },
  logo: {
    background: "#5959f7",
  },
  sign: {
    margin: "30px 0px 5px 0px",
  },
  login: {
    margin: "20px 0px",
  },
});
function Login() {
  const classes = useStyles();
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  function onSubmit() {}
  return (
    <Grid>
      <Paper elevation={10} className={classes.size}>
        <Grid align="center">
          <Avatar className={classes.logo}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          placeholder="Enter email"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          type="password"
          label="Password"
          variant="outlined"
          placeholder="Enter Password"
          fullWidth
          required
        />
        <Typography align="right">
          <Link to={"/forgotpassword"}>Forgot your password ?</Link>
        </Typography>
        <Button
          className={classes.sign}
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onSubmit}
        >
          Log In
        </Button>
        <Typography align="center">
          Do not have an account ? <Link to={"/signup"}>Sign Up</Link>
        </Typography>
        <Divider className={classes.login} />
        {/* <Divider className={classes.login}>Or Connect With</Divider> */}
        <StyledFirebaseAuth
          fullWidth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Paper>
    </Grid>
  );
}
export default Login;
