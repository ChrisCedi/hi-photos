import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";
import { useStyles } from "./ProfileStyles";
import { Typography, Avatar, Grid } from "@material-ui/core";
import { UserNotFound } from "../UserNotFound";
import { get } from "lodash";

export const Profile = ({ username }) => {
  const classes = useStyles();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  const dataUser = get(data, "getUser", {});

  console.log(dataUser);

  if (loading) return null;
  if (error) return <UserNotFound />;

  console.log(dataUser);

  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridAvatar}>
        <Avatar className={classes.avatar} />
        <Typography variant="h4" className={classes.username}>
          {dataUser.username}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.gridInfo}>
        <Typography>{dataUser.name}</Typography>
        <Typography>{dataUser.description}</Typography>
        <Typography>{dataUser.email}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.gridInfo}>
        <Typography>Followers: 5543</Typography>
      </Grid>
    </Grid>
  );
};
