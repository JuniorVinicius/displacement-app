"use client";
import { ScrollList, TitleHeader } from "@/components/utils";
import { vehicleGateway } from "@/services/gateways/vehicle";
import { Typography } from "@mui/material";
import useSWR from "swr";

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
      <TitleHeader page="Veículos" />
      <ScrollList data={data} />

      {error && (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Erro ao listar os veículos!</Typography>
        </div>
      )}
    </>
  );
}
