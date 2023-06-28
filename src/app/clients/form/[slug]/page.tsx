"use client";
import Loading from "@/app/loading";
import GeneralForm from "@/components/generalForm";
import { TitleHeader } from "@/components/utils";
import { clientGateway } from "@/services/gateways/clients";
import { useParams } from "next/navigation";
import useSWR from "swr";
export default function Form() {
  let action: "create" | "edit" = "create";
  const param = useParams();
  const id = param.slug.replace("edit-", "");

  if (param.slug === "create") {
    action = "create";
  } else {
    action = "edit";
  }

  const fetcher = async () => {
    try {
      const { getClientById } = clientGateway();

      const response = await getClientById(id);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useSWR<Clients>(
    action === "edit" ? `/cliente/${id}` : null,
    fetcher
  );

  return (
    <>
      <TitleHeader
        page={`${action === "create" ? "Adicionar" : "Editar"} Cliente`}
        buttonName="Salvar"
        hideButton
      />

      {isLoading ? (
        <Loading />
      ) : (
        <GeneralForm type="client" actions={action} id={id} data={data} />
      )}
    </>
  );
}
