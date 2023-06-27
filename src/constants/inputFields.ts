export const INPUTS_FIELDS: FieldsTypes = {
    client: [
      {
        label: "Nome",
        name: "nome",
        required: true,
      },
      {
        label: "Tipo de documento",
        name: "tipoDocumento",
        required: true,
      },
      {
        label: "Número do documento",
        name: "numeroDocumento",
        required: true,
      },
      {
        label: "Cidade",
        name: "cidade",
        required: true,
      },
      {
        label: "Bairro",
        name: "bairro",
        required: true,
      },
      {
        label: "Número",
        name: "numero",
        required: true,
      },
      {
        label: "Logradouro",
        name: "logradouro",
        required: true,
      },
      {
        label: "UF",
        name: "uf",
        required: true,
      },
    ],
    driver: [
      {
        label: "Nome",
        name: "nome",
        required: true,
      },
      {
        label: "Número da CNH",
        name: "numeroHabilitacao",
        required: true,
      },
      {
        label: "Categoria",
        name: "categoriaHabilitacao",
        required: true,
      },
      {
        label: "Vencimento da CNH",
        name: "vencimentoHabilitacao",
        type: "date",
        required: true,
      },
    ],
    vehicle: [
      {
        label: "Placa",
        name: "placa",
        required: true,
      },
      {
        label: "Marca/Modelo",
        name: "marcaModelo",
        required: true,
      },
      {
        label: "Ano",
        name: "anoFabricacao",
        required: true,
      },
      {
        label: "Km Atual",
        name: "kmAtual",
        required: true,
      },
    ],
    displacement: [
      {
        label: "Km inicial",
        name: "kmInicial",
        required: true,
      },
      {
        label: "Inicio do deslocamento",
        name: "inicioDeslocamento",
        type: "date",
        required: true,
      },
      {
        label: "CheckList",
        name: "checkList",
      },
      {
        label: "Condutor",
        name: "idCondutor",
        required: true,
        type: "select",
        userType: "driver"
      },
      {
        label: "Veículo",
        name: "idVeiculo",
        required: true,
        type: "select",
        userType: "vehicle"
      },
      {
        label: "Cliente",
        name: "idCliente",
        type: "select",
        userType: "client"
      },
      {
        label: "Motivo",
        name: "motivo",
        type: "area",
      },
      {
        label: "Observação",
        name: "observacao",
        type: "area",
      },
    ],
  };