import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./AvatarOptionsStyles";

export const AvatarOptions = (handleOpen) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button color="secondary">Cambiar foto de perfil</Button>
      <Button className={classes.delete}>Eliminar foto actual</Button>

      <Button onClick={handleOpen}>Cancelar</Button>
    </div>
  );
};
