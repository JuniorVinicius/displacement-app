"use client";
import Loading from "@/app/loading";
import GeneralForm from "@/components/generalForm";
import { TitleHeader } from "@/components/utils";
import { driverGateway } from "@/services/gateways/drivers";
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
      const { getDriverById } = driverGateway();

      const response = await getDriverById(id);
      const items = response.data;
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useSWR<EditDrivers>(
    action !== "create" ? `/condutor/${id}` : null,
    fetcher
  );

  const formatData = {
    id: data?.id,
    catergoriaHabilitacao: data?.catergoriaHabilitacao,
    vencimentoHabilitacao: data?.vencimentoHabilitacao,
  };

  return (
    <>
      <TitleHeader
        page={`${action === "create" ? "Adicionar" : "Editar"} Condutor`}
        buttonName="Salvar"
        hideButton
      />
      {isLoading ? (
        <Loading />
      ) : (
        <GeneralForm
          type="driver"
          actions={action}
          id={id}
          data={formatData as EditDrivers}
        />
      )}
    </>
  );
}
