import * as yup from "yup";

export const CreateVehicleSchema = yup.object({
  palte: yup.string().required("Campo obrigatório!"),
  model: yup.string().required("Campo obrigatório!"),
  year: yup.number().integer().required("Campo obrigatório!"),
  km: yup.number().required("Campo obrigatório!"),
})
