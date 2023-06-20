"use client";
import { Typography } from "@mui/material";

type TitleProps = {
  label: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Title({ label, type }: TitleProps) {
  return (
    <Typography variant={type} component={type}>
      {label}
    </Typography>
  );
}
