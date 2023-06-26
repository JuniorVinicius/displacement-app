"use client";
import { Grid } from "@mui/material";
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

export default function GeneralForm({
  type = "client",
  actions = "create",
}: FormProps) {
  const { createClient } = clientGateway();
  const { createDriver } = driverGateway();
  const { createDisplacement } = displacementGateway();
  const { createVehicle } = vehicleGateway();

  async function onSubmit(data: any) {
    try {
      let date = "";
      if (data.displacementInit || data.expiration) {
        const dateToConvert = data.displacementInit || data.expiration;
        date = moment(dateToConvert?.$d).toString();
      }
      await schemas.create[type].validate(data, {
        abortEarly: true,
      });
      if (actions === "create") {
        createElement(data);
      } else {
        editElement(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createElement(data: any) {
    try {
      if (type === "client") {
        await createClient(data);
      } else if (type === "displacement") {
        await createDisplacement(
          moment(data.displacementInit?.$d).toString(),
          data
        );
      } else if (type === "driver") {
        await createDriver(data);
      } else {
        await createVehicle(data);
      }
    } catch (error) {}
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
    }

    return (
      <Grid item key={input.name} width="100%">
        <TextFieldElement {...basicProps} fullWidth />
      </Grid>
    );
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <FormContainer onSuccess={onSubmit}>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={2}
            sx={{
              marginTop: 3,
            }}
          >
            {RENDER_INPUTS}
          </Grid>
        </FormContainer>
      </div>
    </LocalizationProvider>
  );
}
