import moment from "moment";

export function convertDate(date?: string | null) {
  const convertedDate = moment(date).format("DD/MM/YYYY");

  return date ? convertedDate : "Não informado";
}

export function isAfterDate(
  actualDate?: Date | null,
  elementDate?: string | null
) {
  const isAfter = moment(actualDate).isAfter(elementDate);

  return isAfter;
}
