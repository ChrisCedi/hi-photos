import React from "react";
import { useStyles } from "./HeaderStyles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Options } from "../Options";
import { Search } from "../Search";

export const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={3} className={classes.gridTitleLogo}>
        <Typography variant="h3" className={classes.titleLogo}>
          <Link to="/" className={classes.titleLogo}>
            Hi Photos
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Search />
      </Grid>
      <Grid item xs={12} md={3}>
        <Options />
      </Grid>
    </Grid>
  );
};
