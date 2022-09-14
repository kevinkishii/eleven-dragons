import * as yup from "yup"

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "O nome deve ser entre 4 a 20 caracteres")
    .max(20, "O nome deve ser entre 4 a 20 caracteres")
    .matches(
      /\w+/,
      "O nome deve somente ter caracteres alfanuméricos e underscore."
    )
    .required("favor colocar um nome"),
  email: yup
    .string()
    .email("Favor inserir um e-mail válido")
    .required("Favor inserir um e-mail válido"),
  status: yup
    .string()
    .oneOf(["active", "inactive"], "Favor escolher entre ativo ou inativo")
    .required("Favor escolher entre ativo ou inativo"),
})
