import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";
import { useStyles } from "./ProfileStyles";
import { Typography, Avatar, Grid, IconButton } from "@material-ui/core";
import { UserNotFound } from "../UserNotFound";
import { ModalBasic } from "../../components/Modal/ModalBasic";
import { get } from "lodash";
import { useAuth } from "../../context/Auth/hooks/useAuth";
import { AvatarOptions } from "../../components/Avataroptions";

export const Profile = ({ username }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [component, setComponent] = useState(null);
  const user = useAuth();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  const dataUser = get(data, "getUser", {});

  const handleAvatarOptions = (option) => {
    switch (option) {
      case "avatar":
        setTitle("Cambiar foto de perfil");
        setComponent(<AvatarOptions handleOpen={handleOpen} />);
        handleOpen();

        break;

      default:
        break;
    }
  };

  const handleOpen = () => {
    if (username === user.auth.username) setOpen(!open);
  };

  if (loading) return null;
  if (error) return <UserNotFound />;

  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridAvatar}>
        <IconButton onClick={() => handleAvatarOptions("avatar")}>
          <Avatar className={classes.avatar} />
        </IconButton>
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
      <ModalBasic open={open} setOpen={handleOpen} title={title}>
        {component}
      </ModalBasic>
    </Grid>
  );
};
