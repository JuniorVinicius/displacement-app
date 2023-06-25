"use client";
import { ErrorLabel, ScrollList, TitleHeader } from "@/components/utils";
import { clientGateway } from "@/services/gateways/clients";
import useSWR from "swr";

export default function Clients() {
  async function fetchVehicle() {
    const { getClient } = clientGateway();
    try {
      const response = await getClient();
      const clients = response.data as Clients[];
      const listOfClients: ItemsProps[][] = [];

      clients.forEach((client) => {
        listOfClients.push([
          {
            label: "Nome",
            info: client?.nome,
          },
          {
            label: "Nº",
            info: client?.numeroDocumento,
          },
          {
            label: "Documento",
            info: client?.tipoDocumento,
          },
          {
            label: "Cidade",
            info: client?.cidade,
          },
          {
            label: "UF",
            info: client?.uf,
          },
          {
            label: "Bairro",
            info: client?.bairro,
          },
          {
            label: "Logradouro",
            info: client?.logradouro,
          },
          {
            label: "Número",
            info: client?.numero,
          },
          {
            label: "Ações",
            info: "",
          },
        ]);
      });

      return listOfClients;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, error } = useSWR("/api/v1/cliente", fetchVehicle);

  return (
    <>
      <TitleHeader page="Clientes" />
      <ScrollList data={data} columnSpacing={4} />
      <ErrorLabel error={error} message="Erro ao listar os clientes!" />
    </>
  );
}
