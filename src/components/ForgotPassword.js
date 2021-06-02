import React from "react";
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

const useStyles = makeStyles({
  input: {
    margin: "8px 0px",
  },
  size: {
    width: 350,
    height: "40vh",
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

  function onSubmit() {}
  return (
    <Grid>
      <Paper elevation={10} className={classes.size}>
        <Grid align="center">
          <Avatar className={classes.logo}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Forgot Password</h2>
        </Grid>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          placeholder="Enter Email"
          fullWidth
          required
        />
        <Button
          className={classes.sign}
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
