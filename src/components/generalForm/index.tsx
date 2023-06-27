"use client";
import { Alert, AlertTitle, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { INPUTS_FIELDS, schemas } from "@/constants";
import styles from "./styles.module.css";
import {
  DatePickerElement,
  FormContainer,
  TextFieldElement,
} from "react-hook-form-mui";
import moment from "moment";
import { clientGateway } from "@/services/gateways/clients";
import { driverGateway } from "@/services/gateways/drivers";
import { displacementGateway } from "@/services/gateways/displacements";
import { vehicleGateway } from "@/services/gateways/vehicle";
import { ButtonElement, SelectCompoent } from "../utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { AxiosResponse } from "axios";

interface IAlert {
  title: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  display: boolean;
}

interface UserSelect {
  url: string;
  itemToGet: "nome" | "placa";
  fetcher: () => Promise<AxiosResponse<any, any>>;
}

interface UserSelectProps {
  client: UserSelect;
  driver: UserSelect;
  vehicle: UserSelect;
}

export default function GeneralForm({
  type = "client",
  actions = "create",
}: FormProps) {
  const { createClient, getClient } = clientGateway();
  const { createDriver, getDriver } = driverGateway();
  const { createDisplacement } = displacementGateway();
  const { createVehicle, getVehicle } = vehicleGateway();
  const [alert, setAlert] = useState<IAlert>({
    title: "",
    type: "success",
    message: "",
    display: false,
  });
  const [elementSelected, setSelected] = useState({
    client: "",
    driver: "",
    vehicle: "",
  });

  const userSelectProps: UserSelectProps = {
    client: {
      url: "/api/v1/cliente",
      itemToGet: "nome",
      fetcher: getClient,
    },
    driver: {
      url: "/api/v1/condutor",
      itemToGet: "nome",
      fetcher: getDriver,
    },
    vehicle: {
      url: "/api/v1/veiculo",
      itemToGet: "placa",
      fetcher: getVehicle,
    },
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: "client" | "driver" | "vehicle"
  ) => {
    setSelected((prev) => {
      return { ...prev, [type]: event.target.value };
    });
  };
  const router = useRouter();
  async function onSubmit(data: any) {
    try {
      let date = "";
      if (data.inicioDeslocamento || data.vencimentoHabilitacao) {
        const dateToConvert =
          data.inicioDeslocamento || data.vencimentoHabilitacao;
        date = moment(dateToConvert?.$d).toString();
      }
      await schemas.create[type].validate(
        { ...data, date },
        {
          abortEarly: true,
        }
      );
      if (actions === "create") {
        createElement(data);
      } else {
        editElement(data);
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  async function createElement(data: any) {
    try {
      if (type === "client") {
        await createClient(data);
      } else if (type === "displacement") {
        await createDisplacement(data);
      } else if (type === "driver") {
        await createDriver(data);
      } else {
        await createVehicle(data);
      }
      setAlert({
        type: "success",
        title: "Sucesso",
        message: "Criado com sucesso",
        display: true,
      });
      router.push(`/${type}s`);
    } catch (error) {
      setAlert({
        type: "error",
        title: "Erro",
        message: "Ocorreu um erro ao criar",
        display: true,
      });
    }
  }

  async function editElement(data: any) {}

  const RENDER_INPUTS = INPUTS_FIELDS[type].map((input) => {
    const basicProps = {
      label: input.label,
      required: input?.required,
      name: input.name,
    };
    if (input?.type === "date") {
      return (
        <Grid item key={input.name} width="100%">
          <DatePickerElement
            {...basicProps}
            format="DD/MM/YYYY"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
      );
    } else if (input?.type === "area") {
      return (
        <Grid item key={input.name} width="100%">
          <TextFieldElement {...basicProps} multiline rows={2} fullWidth />
        </Grid>
      );
    } else if (input?.type === "select") {
      const index = input.userType ? input.userType : "client";
      const userInfo = userSelectProps[index];
      return (
        <Grid item key={input.name} width="100%">
          <SelectCompoent
            fetcher={userInfo.fetcher}
            handleChange={(e) => handleChange(e, index)}
            itemToGet={userInfo.itemToGet}
            {...basicProps}
            url={userInfo.url}
            value={elementSelected[index]}
          />
        </Grid>
      );
    }

    return (
      <Grid item key={input.name} width="100%">
        <TextFieldElement {...basicProps} fullWidth />
      </Grid>
    );
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {alert.display ? (
        <Alert severity={alert.type}>
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.message}
        </Alert>
      ) : null}
      <div className={styles.container}>
        <FormContainer onSuccess={onSubmit}>
          <Grid container columnSpacing={1} rowSpacing={2}>
            {RENDER_INPUTS}
          </Grid>
          <div className={styles.button}>
            <ButtonElement name="Salvar" type="submit" />
          </div>
        </FormContainer>
      </div>
    </LocalizationProvider>
  );
}
