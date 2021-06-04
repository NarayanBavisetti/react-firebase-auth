import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { db } from "../firebase";

function Profile() {
  const { user, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("Users")
        .doc(user.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [user]);

  async function signOut() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch(error) {
      setError("Failed to logout");
    }
  }
  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      {profiles.fullname}
      {profiles.photoURL ? (
        <img src={profiles.photoURL} alt="profile" />
      ) : (
        <img src="./assets/profile-user.svg" alt="Profile" />
      )}
      <Button variant="contained" onClick={signOut} color="primary">
        Log Out
      </Button>
      <br></br>
      hi
    </div>
  );
}
export default Profile;
