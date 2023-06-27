"use client";
import ProfileUser from "@/components/profileUser";
import { clientGateway } from "@/services/gateways/clients";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function ClientPage() {
  const params = useParams();

  async function getUserInfo() {
    const { getClientById } = clientGateway();
    try {
      const response = await getClientById(params.id);
      const client = response.data as Clients;

      const clientFormated = [
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
      ];

      return clientFormated;
    } catch (error) {
      console.log(error);
    }
  }

  const { data = [], error } = useSWR(
    `api/v1/cliente/${params.id}`,
    getUserInfo
  );

  return (
    <ProfileUser
      error={error}
      message="Ocorreu um erro ao buscar o cliente!"
      data={data}
    />
  );
}
