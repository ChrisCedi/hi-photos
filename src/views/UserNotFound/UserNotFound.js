import React from "react";
import { useStyles } from "./UserNotFoundStyles";
import { Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const UserNotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.elements}>
        Usuario no encontrado
      </Typography>
      <Typography className={classes.elements}>
        Verifica que el nombre de usuario sea correcto
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.elements}
        onClick={() => navigate("/")}
      >
        Regresar al inicio
      </Button>
    </div>
  );
};
