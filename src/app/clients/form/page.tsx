"use client";
import GeneralForm from "@/components/generalForm";
import { TitleHeader } from "@/components/utils";
export default function Form() {
  return (
    <>
      <TitleHeader page="Adicionar Cliente" buttonName="Salvar"/>
      <GeneralForm />
    </>
  );
}
