import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../gql/user";
import { setToken } from "../../../utils/token";
import { useAuth } from "../../../context/Auth/hooks/useAuth";
import { decodeToken } from "../../../utils/token";

export const useFields = () => {
  const [login] = useMutation(LOGIN);
  const [error, setError] = useState(null);
  const { setUser } = useAuth();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Formato de correo invalido")
      .required("Este campo es requerido"),
    password: yup
      .string()
      .min(8, "Minimo ocho caracteres")
      .required("Este campo es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setError("");

      try {
        const {
          data: {
            login: { token },
          },
        } = await login({
          variables: {
            values,
          },
        });

        setToken(token);
        setUser(decodeToken(token));
      } catch (error) {
        setError(error.message);
      }
    },
  });

  return {
    formik,
    error,
  };
};
