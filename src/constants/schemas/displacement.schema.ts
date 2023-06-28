import * as yup from "yup";

export const CreateDisplacementSchema = yup.object({
  kmInicial: yup.number().required(),
  inicioDeslocamento: yup.string().required(),
  checkList: yup.string(),
  idCondutor: yup.number().required(),
  idVeiculo: yup.number().required(),
  idCliente: yup.number(),
  motivo: yup.string(),
  observacao: yup.string(),
})

export const EditDisplacementSchema = yup.object({
  kmFinal: yup.number().required(),
  fimDeslocamento: yup.string().required(),
  observacao: yup.string(),
})
