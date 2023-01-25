import { useFormik } from "formik";
import * as yup from "yup";

export const useFields = () => {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    formik,
  };
};
