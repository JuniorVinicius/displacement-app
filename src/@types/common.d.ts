type ItemsProps = {
  label: string;
  info: string;
};

type UsersType = "client" | "vehicle" | "displacement" | "driver";


type DataEdit = EditClients | EditDrivers | DisplacementsEdit | EditVehicles

type FormProps = {
  type: UsersType;
  actions: "edit" | "create";
  id?: string;
  data?: DataEdit;
};

interface FieldsProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  userType?: "client" | "vehicle" | "driver";
}

interface IFields {
  client: FieldsProps[];
  vehicle: FieldsProps[];
  displacement: FieldsProps[];
  driver: FieldsProps[];
}

type FieldsTypes = {
  create: IFields;
  edit: IFields;
};

interface IAlert {
  title: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  display: boolean;
}
