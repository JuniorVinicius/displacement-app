"use client";
import ProfileUser from "@/components/profileUser";
import { convertDate } from "@/helpers/dateHelper";
import { displacementGateway } from "@/services/gateways/displacements";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function DisplacementPage() {
  const params = useParams();

  async function getUserInfo() {
    const { getDisplacementById } = displacementGateway();
    try {
      const response = await getDisplacementById(params.id);
      const displacement = response.data as Displacements;

      const displacementFormated = [
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
      ];

      return displacementFormated;
    } catch (error) {
      console.log(error);
    }
  }

  const { data = [], error } = useSWR(
    `api/v1/deslocamento/${params.id}`,
    getUserInfo
  );

  return (
    <ProfileUser
      error={error}
      message="Ocorreu um erro ao buscar o deslocamento!"
      data={data}
    />
  );
}
