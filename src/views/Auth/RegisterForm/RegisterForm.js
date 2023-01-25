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
import { useStyles } from "./RegisterFormStyles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFields } from "./useFields";

export const RegisterForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const { formik } = useFields();

  return (
    <div>
      <Typography variant="h6" className={classes.description}>
        Llena los campos para registrarte
      </Typography>
      <form className={classes.container} onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          size="small"
          value={formik.values.name}
          label="Nombre completo"
          placeholder="Ej: Christian Cedillo Palacios"
          variant="outlined"
          className={classes.textField}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="username"
          size="small"
          value={formik.values.username}
          label="Nombre de usuario"
          placeholder="Ej: starscream.s"
          variant="outlined"
          className={classes.textField}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          id="email"
          size="small"
          value={formik.values.email}
          label="Correo electrónico"
          placeholder="example@corro.com"
          variant="outlined"
          className={classes.textField}
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
        <FormControl
          className={classes.textField}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={showPassword1 ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            // helperText={}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword1(!showPassword1)}
                  edge="end"
                >
                  {showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <Typography className={classes.error}>
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </Typography>
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Registar
        </Button>
      </form>
    </div>
  );
};
