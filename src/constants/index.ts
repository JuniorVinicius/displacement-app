import { CreateClientSchema } from "./schemas/client.schema";
import { CreateDriverSchema } from "./schemas/driver.schema";
import { CreateDisplacementSchema } from "./schemas/displacement.schema";
import { CreateVehicleSchema } from "./schemas/vehicle.schema";
import { INPUTS_FIELDS } from "./inputFields";
import * as yup from "yup";

interface ISchemas {
  create: {
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
};

export { INPUTS_FIELDS };
