"use client";
import Loading from "@/app/loading";
import GeneralForm from "@/components/generalForm";
import { TitleHeader } from "@/components/utils";
import { displacementGateway } from "@/services/gateways/displacements";
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
      const { getDisplacementById } = displacementGateway();

      const response = await getDisplacementById(id);
      const items = response.data;
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useSWR<DisplacementsEdit>(
    action !== "create" ? `/deslocamento/${id}` : null,
    fetcher
  );

  const formatData = {
    id: data?.id,
    kmFinal: data?.kmFinal,
    fimDeslocamento: data?.fimDeslocamento,
    observacao: data?.observacao,
    inicioDeslocamento: data?.inicioDeslocamento
  }

  return (
    <>
      <TitleHeader
        page={`${action === "create" ? "Adicionar" : "Editar"} Deslocamento`}
        buttonName="Salvar"
        hideButton
      />
      {isLoading ? (
        <Loading />
      ) : (
        <GeneralForm type="displacement" actions={action} id={id} data={formatData as DisplacementsEdit} />
      )}
    </>
  );
}
