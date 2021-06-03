import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function Users() {
  const classes = useStyles();

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Users").onSnapshot(function (data) {
        setProfiles(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  return (
    <>
      {profiles.map((users) => {
        return (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {users.photoURL ? (
                    <img src={users.photoURL} alt="profile" />
                  ) : (
                    <img src="./assets/profile-user.svg" alt="Profile" />
                  )}
                </Avatar>
              }
              title={users.fullname}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
