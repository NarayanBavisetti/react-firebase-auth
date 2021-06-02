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
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from '@material-ui/lab/Alert';
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
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
const {signup} = useAuth()
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (password.current.value !== confirmpassword.current.value) {
      return setError("Passwords does not match");
    }
    try {
      setError("");
      setLoading(true);
       await signup(email.current.value, password.current.value);
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
{error && <Alert severity="error">{error}</Alert>}
        <TextField
          className={classes.input}
          ref={name}
          type="text"
          label="Name"
          variant="outlined"
          placeholder="Enter Name"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          ref={email}
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
          ref={password}
          variant="outlined"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          label="Confirm Password"
          ref={confirmpassword}
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
          onClick={onSubmit}
        >
          Sign Up
        </Button>
      </Paper>
    </Grid>
  );
}
export default Signup;
