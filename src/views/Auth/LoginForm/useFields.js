import { useFormik } from "formik";
import * as yup from "yup";

export const useFields = () => {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    formik,
  };
};
