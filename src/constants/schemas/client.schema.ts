import * as yup from "yup";

export const CreateClientSchema = yup.object({
  name: yup.string().required("Campo obrigatório!"),
  city: yup.string().required("Campo obrigatório!"),
  document: yup.string().required("Campo obrigatório!"),
  documentNumber: yup.string().required("Campo obrigatório!"),
  neighborhood: yup.string().required("Campo obrigatório!"),
  number: yup.string().required("Campo obrigatório!"),
  reference: yup.string().required("Campo obrigatório!"),
  state: yup.string().required("Campo obrigatório!"),
})
