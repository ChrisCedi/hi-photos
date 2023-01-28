import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
import { toast } from "react-toastify";

export const useFields = (changeScreen) => {
  const [register] = useMutation(REGISTER);

  const validationSchema = yup.object({
    name: yup.string().required("Este campo es requerido"),
    username: yup
      .string()
      .matches(
        /^[a-zA-Z0-9-]*$/,
        "El nombre del usuario no puede tener espacio"
      )
      .required("Este campo es requerido"),
    email: yup
      .string()
      .email("Formato de correo invalido")
      .required("Este campo es requerido"),
    password: yup
      .string()
      .min(8, "Minimo ocho caracteres")
      .required("Este campo es requerido")
      .oneOf([yup.ref("confirmPassword")], "Las contraseñas no coinciden"),
    confirmPassword: yup
      .string()
      .min(8, "Minimo ocho caracteres")
      .required("Este campo es requerido")
      .oneOf([yup.ref("password")], "Las constraseñas no coinciden"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const newUser = {
          name: values.name,
          username: values.username,
          email: values.email,
          password: values.password,
        };

        await register({
          variables: {
            values: newUser,
          },
        });

        toast.success("El usuario registrado correctamente");
        changeScreen(true);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    },
  });

  return {
    formik,
  };
};
