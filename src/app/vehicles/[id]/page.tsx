"use client";
import ProfileUser from "@/components/profileUser";
import { vehicleGateway } from "@/services/gateways/vehicle";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function VehiclePage() {
  const params = useParams();

  async function getUserInfo() {
    const { getVehicleById } = vehicleGateway();
    try {
      const response = await getVehicleById(params.id);
      const vehicle = response.data as Vehicles;
      const vehicleFormated = [
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
        }
      ];

      return vehicleFormated;
    } catch (error) {
      console.log(error);
    }
  }

  const { data = [], error } = useSWR(
    `api/v1/veiculo/${params.id}`,
    getUserInfo
  );

  return (
    <ProfileUser
      error={error}
      message="Ocorreu um erro ao buscar o veiculo!"
      data={data}
    />
  );
}
