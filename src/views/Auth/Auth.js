import React, { useState } from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { useStyles } from "./AuthStyles";
import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const Auth = () => {
  const classes = useStyles();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Box className={classes.container}>
      <Box className={showLogin ? classes.bodyLogin : classes.bodyLogin}>
        <Typography variant="h3" className={classes.title}>
          Hi Photos
        </Typography>
        <Box className={classes.boxForm}>
          {showLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm changeScreen={setShowLogin} />
          )}
        </Box>
        {showLogin ? (
          <Box className={classes.boxForm}>
            <Typography variant="subtitle1">¿No tienes cuenta?</Typography>
            <Link
              component="button"
              variant="subtitle1"
              onClick={() => {
                setShowLogin(false);
              }}
              className={classes.registerButton}
            >
              Registrate
            </Link>
          </Box>
        ) : (
          <Box className={classes.boxForm}>
            <Typography variant="subtitle1">¡inicia con tu cuenta!</Typography>
            <Link
              component="button"
              variant="subtitle1"
              onClick={() => {
                setShowLogin(true);
              }}
              className={classes.registerButton}
            >
              Iniciar sesión
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
