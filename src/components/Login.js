import React, { useState, useRef } from "react";
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
import { Link, useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../firebase";
import { useAuth } from "../context/AuthContext";
import Alert from "@material-ui/lab/Alert";

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
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }
  return (
    <Grid>
      <Paper elevation={10} className={classes.size}>
        <Grid align="center">
          <Avatar className={classes.logo}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={onSubmit}>
          <TextField
            className={classes.input}
            type="email"
            label="Email"
            inputRef={emailRef}
            variant="outlined"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            className={classes.input}
            type="password"
            inputRef={passwordRef}
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
            disabled={loading}
            type="submit"
            className={classes.sign}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Log In
          </Button>
        </form>
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
