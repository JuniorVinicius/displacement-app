"use client";
import {
  Alert,
  AlertTitle,
  CardContent,
  CircularProgress,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { CardContainer } from "../utils";
import Item from "../utils/item";
import { useRouter } from "next/navigation";
import { clientGateway } from "@/services/gateways/clients";
import { displacementGateway } from "@/services/gateways/displacements";
import { vehicleGateway } from "@/services/gateways/vehicle";
import { driverGateway } from "@/services/gateways/drivers";
import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { BsThreeDots } from "react-icons/bs";

type CardListProps = {
  cardInfo?: ItemsProps[];
  columnSpacing?: number;
  type: UsersType;
};

export default function CardList({
  cardInfo,
  columnSpacing,
  type,
}: CardListProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [alert, setAlert] = useState<IAlert>({
    title: "",
    type: "success",
    message: "",
    display: false,
  });
  const open = Boolean(anchorEl);
  const router = useRouter();
  const id = useMemo(() => cardInfo![0].info, [cardInfo]);
  const click = () => {
    cardInfo?.length ? router.push(`/${type}s/${cardInfo[0].info}`) : null;
    console.log("click");
  };

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
      setAlert({
        title: "Sucesso",
        display: true,
        message: "Excluído com sucesso!",
        type: "success",
      });
    } catch (error) {
      setAlert({
        title: "Erro",
        display: true,
        message: "Erro ao excluir!",
        type: "error",
      });
    }
    handleClose();
    setIsDeleting(false);
  };
  const element = (
    <div>
      <button className={styles.button} onClick={handleClick}>
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

  return (
    <>
      {alert.display ? (
        <Alert
          severity={alert.type}
          onClick={() =>
            setAlert((prev) => {
              return { ...prev, display: false };
            })
          }
          className={styles.alert}
        >
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.message}
        </Alert>
      ) : null}
      <CardContainer>
        <Grid
          container
          wrap="wrap"
          rowSpacing={4}
          columnSpacing={columnSpacing ? columnSpacing : 12}
          alignItems="center"
        >
          {cardInfo?.map(({ label, info }, index) => {
            if (label !== "id" && label !== "Ações")
              return (
                <Item
                  onClick={click}
                  key={cardInfo[0].info + index}
                  label={label}
                  info={info}
                />
              );
          })}
          <Grid item zeroMinWidth lg>
            <Typography className={styles.label}>Ações</Typography>
            <Grid item xs zeroMinWidth>
              {!isDeleting ? element : <CircularProgress />}
            </Grid>
          </Grid>
        </Grid>
      </CardContainer>
    </>
  );
}
