"use client";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import { IoMdSave } from "react-icons/io";

type ButtonProps = {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function ButtonElement({ name, type, onClick }: ButtonProps) {
  return (
    <Button
      type={type}
      variant="contained"
      color="secondary"
      onClick={onClick}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "var(--main-button-color)"
            : "var(--main-button-color)",
      }}
      startIcon={
        name.toLowerCase() !== "salvar" ? (
          <BsPlus size={24} />
        ) : (
          <IoMdSave size={24} />
        )
      }
    >
      {name}
    </Button>
  );
}
