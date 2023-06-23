import { getAPI } from "@/services/api/baseUrl";

export const driverGateway = () => {
  const api = getAPI();

  async function getDriver() {
    return await api.get("/condutor");
  }

  async function getDriverById(id?: number) {
    return await api.get(`/condutor/${id}`);
  }

  async function updateDriver<T>(id?: number, params?: T) {
    return await api.put(`/condutor/${id}`, params);
  }

  async function deleteDriver(id?: number) {
    return await api.delete(`/condutor/${id}`);
  }

  async function createDriver<T>(params?: T) {
    return await api.post("/condutor", params);
  }

  return { getDriver, getDriverById, updateDriver, deleteDriver, createDriver };
};
