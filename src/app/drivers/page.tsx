"use client";
import { ErrorLabel, ScrollList, TitleHeader } from "@/components/utils";
import { convertDate, isAfterDate } from "@/helpers/dateHelper";
import { driverGateway } from "@/services/gateways/drivers";
import useSWR from "swr";

export default function Drivers() {
  async function fetchDrivers() {
    const { getDriver } = driverGateway();
    try {
      const response = await getDriver();
      const drivers = response.data as Driver[];
      const listOfDrivers: ItemsProps[][] = [];

      const today = new Date();
      drivers.forEach((driver) => {
        listOfDrivers.push([
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
          {
            label: "Ações",
            info: "",
          },
        ]);
      });

      return listOfDrivers;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, error } = useSWR("/api/v1/condutor", fetchDrivers);

  return (
    <>
      <TitleHeader page="Condutores" />
      <ScrollList data={data} />
      <ErrorLabel error={error} message="Erro ao listar os condutores!" />
    </>
  );
}
