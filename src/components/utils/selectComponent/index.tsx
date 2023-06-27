"use client";
import useSWR from "swr";
import { MenuItem } from "@mui/material";
import ErrorLabel from "../errorLabel";
import { AxiosResponse } from "axios";
import { TextFieldElement } from "react-hook-form-mui";
import { ChangeEvent } from "react";
interface Items {
  id: number;
  nome?: string;
  placa?: string;
}

type SelectProps = {
  label: string;
  required?: boolean;
  name: string;
  url: string;
  value: string;
  itemToGet: "nome" | "placa";
  fetcher: () => Promise<AxiosResponse<any, any>>;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function SelectCompoent({
  label,
  required,
  name,
  value,
  itemToGet,
  url,
  fetcher,
  handleChange,
}: SelectProps) {
  const fetchELement = async () => {
    const response = await fetcher();
    const data = response.data as Items[];
    return data?.map((item, index) => {
      return (
        <MenuItem key={item.id + index} value={item.id}>
          {item[itemToGet]}
        </MenuItem>
      );
    });
  };

  const { data, error } = useSWR(url, fetchELement);

  return (
    <>
      <TextFieldElement
        select
        fullWidth
        required={required}
        label={label}
        defaultValue=""
        name={name}
        SelectProps={{
          multiple: false,
          value: value,
        }}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Selecione</em>
        </MenuItem>
        {error ? (
          <ErrorLabel error={error} message="Erro ao listar items" />
        ) : (
          data
        )}
      </TextFieldElement>
    </>
  );
}
