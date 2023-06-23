"use client";
import { ScrollList, TitleHeader } from "@/components/utils";
import { driverGateway } from "@/services/gateways/drivers";
import { Typography } from "@mui/material";
import moment from "moment";

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
            info: moment(driver?.vencimentoHabilitacao).format("DD/MM/YYYY"),
          },
          {
            label: "Status",
            info: moment(today).isAfter(driver?.vencimentoHabilitacao)
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

  const { data, error, isLoading } = useSWR("/api/v1/condutor", fetchDrivers);

  return (
    <>
      <TitleHeader page="Condutores" />
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
          <Typography>Erro ao listar os condutores!</Typography>
        </div>
      )}
    </>
  );
}
