import * as yup from "yup";

export const CreateDriverSchema = yup.object({
  nome: yup.string().required(),
  numeroHabilitacao: yup.string().required(),
  categoriaHabilitacao: yup.string().required(),
  vencimentoHabilitacao: yup.string().required(),
})

export const EditDriverSchema = yup.object({
  categoriaHabilitacao: yup.string(),
  vencimentoHabilitacao: yup.string(),
})