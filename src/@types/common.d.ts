type ItemsProps = {
  label: string;
  info: string;
};

type UsersType = "client" | "vehicle" | "displacement" | "driver"

type FormProps = {
  type: UsersType,
  actions: "edit" | "create"
}

interface FieldsProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

type FieldsTypes = {
  client: FieldsProps[];
  vehicle: FieldsProps[];
  displacement: FieldsProps[];
  driver: FieldsProps[];
};
