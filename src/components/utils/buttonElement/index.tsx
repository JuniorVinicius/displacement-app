"use client"
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";

type ButtonProps = {
  name: string;
};

export default function ButtonElement({ name }: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "var(--main-button-color)"
            : "var(--main-button-color)",
      }}
      startIcon={<BsPlus size={24} />}
    >
      {name}
    </Button>
  );
}
