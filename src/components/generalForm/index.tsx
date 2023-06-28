"use client";
import { Alert, AlertTitle, CircularProgress, Grid } from "@mui/material";
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
import { ChangeEvent, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import dayjs from "dayjs";

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
  id,
  data,
}: FormProps) {
  const { createClient, getClient, updateClient } = clientGateway();
  const { createDriver, getDriver, updateDriver } = driverGateway();
  const { createDisplacement, updateDisplacement } = displacementGateway();
  const { createVehicle, getVehicle, updateVehicle } = vehicleGateway();
  const [isLoading, setIsLoading] = useState(false);
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
      await schemas[actions][type].validate(
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
    setIsLoading(true);
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
        message: "Criado com sucesso!",
        display: true,
      });
      router.push(`/${type}s`);
    } catch (error) {
      setAlert({
        type: "error",
        title: "Erro",
        message: "Ocorreu um erro ao criar!",
        display: true,
      });
    }
    setIsLoading(false);
  }

  async function editElement(data: any) {
    setIsLoading(true);
    try {
      if (type === "client") {
        await updateClient(id, data);
      } else if (type === "displacement") {
        await updateDisplacement(id, data);
      } else if (type === "driver") {
        await updateDriver(id, data);
      } else {
        await updateVehicle(id, data);
      }
      setAlert({
        type: "success",
        title: "Sucesso",
        message: "Editado com sucesso!",
        display: true,
      });
      router.push(`/${type}s`);
    } catch (error) {
      setAlert({
        type: "error",
        title: "Erro",
        message: "Ocorreu um erro ao editar!",
        display: true,
      });
    }
    setIsLoading(false);
  }

  const RENDER_INPUTS = INPUTS_FIELDS[actions][type]?.map((input) => {
    const basicProps = {
      label: input.label,
      required: input?.required,
      name: input.name,
    };
    if (input?.type === "date") {
      const date = data as Displacements;
      return (
        <Grid item key={input.name} width="100%">
          <DatePickerElement
            {...basicProps}
            format="DD/MM/YYYY"
            sx={{ minWidth: "100%" }}
            minDate={
              actions === "edit" && type === "displacement"
                ? dayjs(date?.inicioDeslocamento)
                : null
            }
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

  let initialData = { ...data };

  if (type === "displacement" && actions === "edit") {
    const date = data as DisplacementsEdit;
    initialData = {
      ...initialData,
      fimDeslocamento: dayjs(date?.fimDeslocamento),
    };
  } else if (type === "driver" && actions === "edit") {
    const driverData = data as EditDrivers;
    initialData = {
      id: driverData?.id,
      categoriaHabilitacao: driverData?.catergoriaHabilitacao,
      vencimentoHabilitacao: dayjs(driverData?.vencimentoHabilitacao),
    };
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {alert.display ? (
        <Alert severity={alert.type}>
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.message}
        </Alert>
      ) : null}
      <div className={styles.container}>
        <FormContainer onSuccess={onSubmit} defaultValues={initialData}>
          <Grid container columnSpacing={1} rowSpacing={2}>
            {RENDER_INPUTS}
          </Grid>
          {!isLoading ? (
            <div className={styles.button}>
              <ButtonElement name="Salvar" type="submit" />
            </div>
          ) : (
            <CircularProgress />
          )}
        </FormContainer>
      </div>
    </LocalizationProvider>
  );
}