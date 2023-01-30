import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./AvatarOptionsStyles";
import { useDropzone } from "react-dropzone";

export const AvatarOptions = (handleOpen) => {
  const classes = useStyles();

  const onDrop = useCallback((acceptedFile) => {
    console.log(acceptedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <div className={classes.container}>
      <Button color="secondary" {...getRootProps()}>
        Cargar foto
      </Button>
      <Button className={classes.delete}>Eliminar foto actual</Button>

      <Button onClick={handleOpen}>Cancelar</Button>
      <input {...getInputProps()} />
    </div>
  );
};
