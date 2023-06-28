import { CreateClientSchema, EditClientSchema } from "./schemas/client.schema";
import { CreateDriverSchema, EditDriverSchema } from "./schemas/driver.schema";
import { CreateDisplacementSchema, EditDisplacementSchema } from "./schemas/displacement.schema";
import { CreateVehicleSchema, EditVehicleSchema } from "./schemas/vehicle.schema";
import { INPUTS_FIELDS } from "./inputFields";
import * as yup from "yup";

interface ISchemas {
  create: {
    client: yup.ObjectSchema<any>;
    displacement: yup.ObjectSchema<any>;
    driver: yup.ObjectSchema<any>;
    vehicle: yup.ObjectSchema<any>;
  };
  edit: {
    client: yup.ObjectSchema<any>;
    displacement: yup.ObjectSchema<any>;
    driver: yup.ObjectSchema<any>;
    vehicle: yup.ObjectSchema<any>;
  };
}

export const schemas: ISchemas = {
  create: {
    client: CreateClientSchema,
    displacement: CreateDisplacementSchema,
    driver: CreateDriverSchema,
    vehicle: CreateVehicleSchema,
  },
  edit:{
    client: EditClientSchema,
    displacement: EditDisplacementSchema,
    driver: EditDriverSchema,
    vehicle: EditVehicleSchema,
  }
};

export { INPUTS_FIELDS };
