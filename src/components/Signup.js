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
    height: "68vh",
    margin: "40px auto",
    padding: 20,
  },
  sign:{
      margin:"30px auto"
  },
  logo:{
    background: "#5959f7"
},
});
function Signup() {
  const classes = useStyles();

  function onSubmit() {}
  return (
    <Grid>
      <Paper elevation={10} className={classes.size}>
        <Grid align="center">
        <Avatar className={classes.logo}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <TextField
          className={classes.input}
          label="Name"
          variant="outlined"
          placeholder="Enter Name"
          fullWidth
          required
        />
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
          label="Password"
          variant="outlined"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <TextField
          className={classes.input}
          label="Confirm Password"
          variant="outlined"
          type="password"
          placeholder="Enter password"
          fullWidth
          required
        />
        <Typography align="center">
          Already have an account ? <Link to={"/login"}>Log In</Link>
        </Typography>
        <Button className={classes.sign} fullWidth variant="contained" color="secondary" onClick={onSubmit}>
          Sign Up
        </Button>
      </Paper>
    </Grid>
  );
}
export default Signup;
