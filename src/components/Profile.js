import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthContext";
import Alert from "@material-ui/lab/Alert";

function Profile() {
  const { user, logout } = useAuth();
  const [error,setError] = useState("")
  const history = useHistory();

 async function signOut() {
    setError("");
    try {
      await logout()
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <div>
        {error && <Alert severity="error">{error}</Alert>}
      {user.email}
      {user.uid}
      <Button variant="contained" onClick={signOut} color="primary">
        Log Out
      </Button>
      <br></br>
      hi
    </div>
  );
}
export default Profile;
