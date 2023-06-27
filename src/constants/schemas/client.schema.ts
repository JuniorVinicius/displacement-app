import * as yup from "yup";

export const CreateClientSchema = yup.object({
  nome: yup.string().required(),
  cidade: yup.string().required(),
  tipoDocumento: yup.string().required(),
  numeroDocumento: yup.string().required(),
  bairro: yup.string().required(),
  numero: yup.string().required(),
  logradouro: yup.string().required(),
  uf: yup.string().required(),
});
