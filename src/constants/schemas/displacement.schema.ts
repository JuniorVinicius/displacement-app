import * as yup from "yup";

export const CreateDisplacementSchema = yup.object({
  initialKm: yup.number().required("Campo obrigatório!"),
  displacementInit: yup.string().required("Campo obrigatório!"),
  checkList: yup.string(),
  driver: yup.number().required("Campo obrigatório!"),
  vehicle: yup.number().required("Campo obrigatório!"),
  client: yup.number(),
  reason: yup.string(),
  observation: yup.string(),
})
