"use client";
import { Paper } from "@mui/material";
import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
  onClick?: () => void
};

export default function CardContainer({ children, onClick }: CardContainerProps) {
  return (
    <Paper
      sx={{
        p: 4,
        margin: "auto",
        minWidth: "100%",
        marginTop: 2,
        borderRadius: 3,
        flexGrow: 1,
        cursor: "pointer",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "var(--main-card-dark)"
            : "var(--main-card-color)",
        ":hover": {
          filter: "brightness(.95)" 
        }
      }}
      onClick={onClick}
    >
      {children}
    </Paper>
  );
}
