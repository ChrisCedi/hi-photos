import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";
import { useStyles } from "./ProfileStyles";
import { Typography } from "@material-ui/core";
import { get } from "lodash";

export const Profile = ({ username }) => {
  const classes = useStyles();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  const dataUser = get(data, "getUser", {});

  if (loading) return null;
  if (error) return <Typography>Usuario no encontrado</Typography>;

  console.log(dataUser);

  return <div>Profile</div>;
};
