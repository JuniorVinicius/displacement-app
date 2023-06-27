"use client";
import { ErrorLabel, ScrollList, TitleHeader } from "@/components/utils";
import { convertDate } from "@/helpers/dateHelper";
import { displacementGateway } from "@/services/gateways/displacements";
import useSWR from "swr";
import Loading from "../loading";

export default function Displacements() {
  async function fetchDisplacement() {
    const { getDisplacement } = displacementGateway();
    try {
      const response = await getDisplacement();
      const displacements = response.data as Displacements[];
      const listOfDisplacements: ItemsProps[][] = [];

      displacements.forEach((displacement) => {
        listOfDisplacements.push([
          { label: "id", info: displacement?.id.toString() },
          {
            label: "Deslocamento Inicial",
            info: convertDate(displacement?.inicioDeslocamento),
          },
          {
            label: "Deslocamento Final",
            info: convertDate(displacement?.fimDeslocamento),
          },
          {
            label: "Km Inicial",
            info: displacement?.kmInicial?.toString(),
          },
          {
            label: "Km Final",
            info: displacement?.kmFinal?.toString(),
          },
          {
            label: "Motivo",
            info: displacement?.motivo,
          },
          {
            label: "Observação",
            info: displacement?.observacao,
          },
          {
            label: "Ações",
            info: "",
          },
        ]);
      });

      return listOfDisplacements;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, error, isLoading } = useSWR(
    "/api/v1/deslocamento",
    fetchDisplacement
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TitleHeader page="Deslocamentos" />
          <ScrollList data={data} columnSpacing={4} type="displacement" />
          <ErrorLabel
            error={error}
            message="Erro ao listar os deslocamentos!"
          />
        </>
      )}
    </>
  );
}
