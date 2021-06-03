import React, { useRef, useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../context/AuthContext";

const useStyles = makeStyles({
  input: {
    margin: "8px 0px",
  },
  size: {
    width: 350,
    height: "75vh",
    margin: "40px auto",
    padding: 20,
  },
  sign: {
    margin: "30px auto",
  },
  logo: {
    background: "#5959f7",
  },
});
function Signup() {
  const classes = useStyles();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [account,setAccount] = useState("");
  const history = useHistory();
  async function onSubmit(e) {

    e.preventDefault();
    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      return setError("Passwords does not match");
    } else if (passwordRef.current.value.length < 6) {
      return setError("Length of password is less than 6 character");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value , nameRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
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
          <h2>Sign Up</h2>
        </Grid>
        {/* This account already exists */}
        {/* {account && <Alert severity="warning">{account}</Alert> } */}
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={onSubmit}>
          <TextField
            className={classes.input}
            inputRef={nameRef}
            type="text"
            label="Name"
            variant="outlined"
            placeholder="Enter Name"
            fullWidth
            required
          />
          <TextField
            className={classes.input}
            inputRef={emailRef}
            type="email"
            label="Email"
            variant="outlined"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            className={classes.input}
            label="Password"
            inputRef={passwordRef}
            variant="outlined"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
          />
          <TextField
            className={classes.input}
            label="Confirm Password"
            inputRef={confirmpasswordRef}
            variant="outlined"
            type="password"
            placeholder="Enter password"
            fullWidth
            required
          />
          <Typography align="center">
            Already have an account ? <Link to={"/login"}>Log In</Link>
          </Typography>
          <Button
            className={classes.sign}
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
export default Signup;
