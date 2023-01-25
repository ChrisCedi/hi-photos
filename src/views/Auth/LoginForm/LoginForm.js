import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  helperText,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./LoginFormStyles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFields } from "./useFields";

export const LoginForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const { formik } = useFields();

  return (
    <div>
      <Typography variant="h6" className={classes.description}>
        Ingresa tus datos para iniciar sesión
      </Typography>
      <form className={classes.container} onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          size="small"
          variant="outlined"
          label="Correo electrónico"
          className={classes.textField}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <FormControl
          className={classes.textField}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <Typography className={classes.error}>
            {formik.touched.password && formik.errors.password}
          </Typography>
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
};
