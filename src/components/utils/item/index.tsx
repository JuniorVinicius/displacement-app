"use client";
import {
  Alert,
  AlertTitle,
  CircularProgress,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import CardLabel from "../../cardLabel";
import styles from "./styles.module.css";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { clientGateway } from "@/services/gateways/clients";
import { displacementGateway } from "@/services/gateways/displacements";
import { vehicleGateway } from "@/services/gateways/vehicle";
import { driverGateway } from "@/services/gateways/drivers";
import { useRouter } from "next/navigation";

type ItemsProps = {
  label: string;
  info: string;
  id: string;
  type: UsersType;
};

export default function Item({ label, info, type, id }: ItemsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter()
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = async () => {
    setIsDeleting(true);
    try {
      if (type === "client") {
        const { deleteClient } = clientGateway();
        await deleteClient(id);
      } else if (type === "displacement") {
        const { deleteDisplacement } = displacementGateway();
        await deleteDisplacement(id);
      } else if (type === "vehicle") {
        const { deleteVehicle } = vehicleGateway();
        await deleteVehicle(id);
      } else {
        const { deleteDriver } = driverGateway();
        await deleteDriver(id);
      }
      handleClose();
      setIsDeleting(false);
      return (
        <Alert severity="success">
          <AlertTitle>Sucesso</AlertTitle>
          Excluído com sucesso!
        </Alert>
      );
    } catch (error) {
      return (
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          Ocorreu um erro ao excluir!
        </Alert>
      );
    }
  };
  let element = null;

  if (label !== "Status" && label !== "Ações") {
    element = (
      <Typography noWrap className={styles.info}>
        {info ? info : "-"}
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
          <MenuItem onClick={onDelete}>Excluir</MenuItem>
        </Menu>
      </div>
    );
  } 
  else {
    element = <CardLabel status={info as "valid" | "invalid"} />;
  }

  return (
    <>
      <Grid item zeroMinWidth lg >
        <Typography className={styles.label}>{label}</Typography>
        <Grid item xs zeroMinWidth>
          {!isDeleting ? element : <CircularProgress  />}
        </Grid>
      </Grid>
    </>
  );
}
