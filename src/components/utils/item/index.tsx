"use client";
import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import CardLabel from "../../cardLabel";
import styles from "./styles.module.css";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

type ItemsProps = {
  label: string;
  info: string;
  onClick?: () => void
};

export default function Item({ label, info, onClick }: ItemsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let element = null;

  if (label !== "Status" && label !== "Ações") {
    element = (
      <Typography noWrap className={styles.info}>
        {info}
      </Typography>
    );
  } else if (label === "Ações") {
    element = (
      <div>
        <button onClick={handleClick} className={styles.button}>
          <BsThreeDots
            size={24}
            color={
              anchorEl ? "var(--selected-text-color)" : "var(--main-text-color)"
            }
          />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Editar</MenuItem>
          <MenuItem onClick={handleClose}>Excluir</MenuItem>
        </Menu>
      </div>
    );
  } else {
    element = <CardLabel status={info as "valid" | "invalid"} />;
  }

  return (
    <Grid item zeroMinWidth lg onClick={onClick}>
      <Typography className={styles.label}>{label}</Typography>
      <Grid item xs zeroMinWidth>
        {element}
      </Grid>
    </Grid>
  );
}
