import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import { useStyles } from "./OptionsStyles";
import AddIcon from "@material-ui/icons/Add";
import { Popover } from "../Popover";
import { useAuth } from "../../context/Auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";
import CollectionsIcon from "@material-ui/icons/Collections";

export const Options = () => {
  const classes = useStyles();
  const userData = useAuth();
  const navigate = useNavigate();

  const username = get(userData, "auth.username", "");

  return (
    <div className={classes.container}>
      <IconButton onClick={() => navigate(`/`)}>
        <CollectionsIcon color="secondary" fontSize="large" />
      </IconButton>
      <IconButton onClick={() => navigate(`/user/${username}`)}>
        <Avatar color="secondary" className={classes.avatar} />
      </IconButton>
      <IconButton>
        <AddIcon color="secondary" />
      </IconButton>
      <Popover />
    </div>
  );
};
