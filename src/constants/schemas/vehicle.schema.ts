import * as yup from "yup";

export const CreateVehicleSchema = yup.object({
  placa: yup.string().required(),
  marcaModelo: yup.string().required(),
  anoFabricacao: yup.number().integer().required(),
  kmAtual: yup.number().required(),
})
