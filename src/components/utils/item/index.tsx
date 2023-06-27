"use client";
import { Grid, Typography } from "@mui/material";
import CardLabel from "../../cardLabel";
import styles from "./styles.module.css";

type ItemsProps = {
  label: string;
  info: string;
  onClick?: () => void
};

export default function Item({ label, info, onClick}: ItemsProps) {
  let element = null;

  if (label !== "Status" && label !== "Ações") {
    element = (
      <Typography noWrap className={styles.info}>
        {info ? info : "-"}
      </Typography>
    );
  } else {
    element = <CardLabel status={info as "valid" | "invalid"} />;
  }

  return (
    <>
      <Grid item zeroMinWidth lg onClick={onClick}>
        <Typography className={styles.label}>{label}</Typography>
        <Grid item xs zeroMinWidth>
          {element}
        </Grid>
      </Grid>
    </>
  );
}
