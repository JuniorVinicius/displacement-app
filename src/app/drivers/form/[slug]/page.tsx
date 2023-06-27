"use client";
import GeneralForm from "@/components/generalForm";
import { TitleHeader } from "@/components/utils";
import { useParams } from "next/navigation";
export default function Form() {
  let action: "create" | "edit" = "create";
  const param = useParams();

  if (param.slug === "create") {
    action = "create";
  } else {
    action = "edit";
  }
  return (
    <>
      <TitleHeader
        page={`${action === "create" ? "Adicionar" : "Editar"} Condutor`}
        buttonName="Salvar"
        hideButton
      />
      <GeneralForm type="driver" actions="create" />
    </>
  );
}
