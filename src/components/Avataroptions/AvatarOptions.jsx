import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./AvatarOptionsStyles";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/client";
import { UPDATE_AVATAR } from "../../gql/user";

export const AvatarOptions = ({ handleOpen }) => {
  const classes = useStyles();

  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];

    try {
      const response = await updateAvatar({
        variables: {
          file,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
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

      <Button onClick={() => handleOpen(false)}>Cancelar</Button>
      <input {...getInputProps()} />
    </div>
  );
};
