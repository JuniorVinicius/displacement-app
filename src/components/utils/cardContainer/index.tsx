"use client"
import { Paper } from "@mui/material";
import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
};

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <Paper
      sx={{
        p: 4,
        margin: "auto",
        minWidth: "100%",
        marginTop: 2,
        borderRadius: 3,
        flexGrow: 1,
        boxShadow: "none",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "var(--main-card-dark)" : "var(--main-card-color)",
      }}
    >
      {children}
    </Paper>
  );
}
