"use client";
import ProfileUser from "@/components/profileUser";
import { convertDate, isAfterDate } from "@/helpers/dateHelper";
import { driverGateway } from "@/services/gateways/drivers";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function DriverPage() {
  const params = useParams();

  async function getUserInfo() {
    const { getDriverById } = driverGateway();
    try {
      const response = await getDriverById(params.id);
      const driver = response.data as Driver;
      const today = new Date();
      const driverFormated = [
        {
          label: "Nome",
          info: driver?.nome,
        },
        {
          label: "CNH",
          info: driver?.numeroHabilitacao,
        },
        {
          label: "Categoria",
          info: driver?.catergoriaHabilitacao,
        },
        {
          label: "Vencimento",
          info: convertDate(driver?.vencimentoHabilitacao),
        },
        {
          label: "Status",
          info: isAfterDate(today, driver?.vencimentoHabilitacao)
            ? "invalid"
            : "valid",
        },
      ];

      return driverFormated;
    } catch (error) {
      console.log(error);
    }
  }

  const { data = [], error } = useSWR(
    `api/v1/condutor/${params.id}`,
    getUserInfo
  );

  return (
    <ProfileUser
      error={error}
      message="Ocorreu um erro ao buscar o condutor!"
      data={data}
    />
  );
}
