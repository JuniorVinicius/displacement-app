"use client";
import { ErrorLabel, ScrollList, TitleHeader } from "@/components/utils";
import { vehicleGateway } from "@/services/gateways/vehicle";
import useSWR from "swr";
import Loading from "../loading";

export default function Vehicles() {
  async function fetchVehicle() {
    const { getVehicle } = vehicleGateway();
    try {
      const response = await getVehicle();
      const vehicles = response.data as Vehicles[];
      const lisOfVehicles: ItemsProps[][] = [];

      vehicles.forEach((vehicle) => {
        lisOfVehicles.push([
          {
            label: "Marca/Modelo",
            info: vehicle?.marcaModelo,
          },
          {
            label: "Ano",
            info: vehicle?.anoFabricacao.toString(),
          },
          {
            label: "Placa",
            info: vehicle?.placa,
          },
          {
            label: "Km",
            info: vehicle?.kmAtual,
          },
          {
            label: "Ações",
            info: "",
          },
        ]);
      });

      return lisOfVehicles;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, error, isLoading } = useSWR("/api/v1/veiculo", fetchVehicle);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TitleHeader page="Veículos" />
          <ScrollList data={data} />
          <ErrorLabel error={error} message="Erro ao listar os veículos!" />
        </>
      )}
    </>
  );
}
