import * as yup from "yup";

export const CreateDriverSchema = yup.object({
  name: yup.string().required("Campo obrigatório!"),
  cnhNumber: yup.string().required("Campo obrigatório!"),
  document: yup.string().required("Campo obrigatório!"),
  category: yup.string().required("Campo obrigatório!"),
  expiration: yup.string().required("Campo obrigatório!"),
})
