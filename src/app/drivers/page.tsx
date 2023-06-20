"use client";
import CardList from "@/components/cardList";
import { Title } from "@/components/utils";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";

export default function Drivers() {
  const users = [
    {
      label: "Nome",
      info: "Adam Warlock",
    },
    {
      label: "CNH",
      info: "xxxx0x9xx",
    },
    {
      label: "Categoria",
      info: "A",
    },
    {
      label: "Vencimento",
      info: "12 Dec, 2020",
    },
    {
      label: "Status",
      info: "Válido",
    },
    {
      label: "Ações",
      info: "",
    },
  ];
  return (
    <>
      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
        <Title type="h4" label="Condutores" />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "var(--main-button-color)"
                : "var(--main-button-color)",
          }}
          startIcon={<BsPlus size={24}/>}
        >
          Adicionar
        </Button>
      </div>
      <CardList cardInfo={users} />
      <CardList cardInfo={users} />
    </>
  );
}
