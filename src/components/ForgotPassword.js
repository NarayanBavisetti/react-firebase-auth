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
import { useAuth } from "../context/AuthContext";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  input: {
    margin: "8px 0px",
  },
  size: {
    width: 350,
    height: "45vh",
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
function Forgotpassword() {
  const classes = useStyles();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetpassword } = useAuth();

  async function onSubmit() {
    try {
      setError("");
      setMessage("");
      setLoading(false);
      await resetpassword(emailRef.current.value);
      setMessage("Check you inbox for further instructions");
    } catch(error) {
      setError("Failed to reset password")
    }
  }
  return (
    <Grid>
      <Paper elevation={10} className={classes.size}>
        <Grid align="center">
          <Avatar className={classes.logo}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Forgot Password</h2>
        </Grid>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
        <TextField
          className={classes.input}
          label="Email"
          inputRef={emailRef}
          variant="outlined"
          placeholder="Enter Email"
          fullWidth
          required
        />
        <Button
          className={classes.sign}
          disabled={loading}
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onSubmit}
        >
          Reset Password
        </Button>
        <Typography align="center">
          Back to <Link to={"/login"}>Log In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
export default Forgotpassword;