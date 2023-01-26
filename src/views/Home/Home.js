import React from "react";
import { useStyles } from "./HomeStyles";
import { useAuth } from "../../context/Auth/hooks/useAuth";

export const Home = () => {
  const classes = useStyles();
  const auth = useAuth();

  console.log("home", auth);

  return <div className={classes.box}>Home</div>;
};
