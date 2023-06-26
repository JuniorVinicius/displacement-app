type ItemsProps = {
  label: string;
  info: string;
};

type FormProps = {
  type: "client" | "vehicle" | "displacement" | "driver",
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
