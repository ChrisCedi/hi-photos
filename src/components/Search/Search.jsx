import React from "react";
import { TextField } from "@material-ui/core";

export const Search = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Buscar"
        placeholder="Ej: Javier Cedillo"
        variant="outlined"
        fullWidth
        color="secondary"
      />
    </div>
  );
};
