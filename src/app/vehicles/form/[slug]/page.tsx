"use client";
import GeneralForm from "@/components/generalForm";
import { TitleHeader } from "@/components/utils";
import { vehicleGateway } from "@/services/gateways/vehicle";
import { useParams } from "next/navigation";
import useSWR from "swr";
import Loading from "@/app/loading";

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
      const { getVehicleById } = vehicleGateway();

      const response = await getVehicleById(id);
      const items = response.data;
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useSWR<EditVehicles>(
    action !== "create" ? `/veiculo/${id}` : null,
    fetcher
  );

  const formatData = {
    id: data?.id,
    anoFabricacao: data?.anoFabricacao,
    kmAtual: data?.kmAtual,
    marcaModelo: data?.marcaModelo,
  };
  return (
    <>
      <TitleHeader
        page={`${action === "create" ? "Adicionar" : "Editar"} Veículo`}
        buttonName="Salvar"
        hideButton
      />
      {isLoading ? (
        <Loading />
      ) : (
        <GeneralForm
          type="vehicle"
          actions={action}
          id={id}
          data={formatData as EditVehicles}
        />
      )}
    </>
  );
}
