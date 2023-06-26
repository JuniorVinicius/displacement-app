export const INPUTS_FIELDS: FieldsTypes = {
    client: [
      {
        label: "Nome",
        name: "Name",
        required: true,
      },
      {
        label: "Tipo de documento",
        name: "document",
        required: true,
      },
      {
        label: "Número do documento",
        name: "documentNumber",
        required: true,
      },
      {
        label: "Cidade",
        name: "city",
        required: true,
      },
      {
        label: "Bairro",
        name: "neighborhood",
        required: true,
      },
      {
        label: "Número",
        name: "number",
        required: true,
      },
      {
        label: "Logradouro",
        name: "reference",
        required: true,
      },
      {
        label: "UF",
        name: "state",
        required: true,
      },
    ],
    driver: [
      {
        label: "Nome",
        name: "Name",
        required: true,
      },
      {
        label: "Número da CNH",
        name: "cnhNumber",
        required: true,
      },
      {
        label: "Categoria",
        name: "category",
        required: true,
      },
      {
        label: "Vencimento da CNH",
        name: "expiration",
        type: "date",
        required: true,
      },
    ],
    vehicle: [
      {
        label: "Placa",
        name: "plate",
        required: true,
      },
      {
        label: "Marca/Modelo",
        name: "model",
        required: true,
      },
      {
        label: "Ano",
        name: "year",
        required: true,
      },
      {
        label: "Km Atual",
        name: "km",
        required: true,
      },
    ],
    displacement: [
      {
        label: "Km inicial",
        name: "initialKm",
        required: true,
      },
      {
        label: "Inicio do deslocamento",
        name: "displacementInit",
        type: "date",
        required: true,
      },
      {
        label: "CheckList",
        name: "checkList",
      },
      {
        label: "Condutor",
        name: "driver",
        required: true,
      },
      {
        label: "Veículo",
        name: "vehicle",
        required: true,
      },
      {
        label: "Cliente",
        name: "client",
      },
      {
        label: "Motivo",
        name: "reason",
        type: "area",
      },
      {
        label: "Observação",
        name: "observation",
        type: "area",
      },
    ],
  };