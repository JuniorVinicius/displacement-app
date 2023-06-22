import axios from "axios";

export function getAPI() {
  const api = axios.create({
    baseURL: "https://api-deslocamento.herokuapp.com/api/v1/",
  });
  return api;
}
