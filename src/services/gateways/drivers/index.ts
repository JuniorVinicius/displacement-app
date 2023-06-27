import { getAPI } from "@/services/api/baseUrl";

export const driverGateway = () => {
  const api = getAPI();

  async function getDriver() {
    return await api.get("/condutor");
  }

  async function getDriverById(id?: string) {
    return await api.get(`/condutor/${id}`);
  }

  async function updateDriver<T>(id?: string, params?: T) {
    return await api.put(`/condutor/${id}`, params);
  }

  async function deleteDriver(id?: string) {
    return await api.delete(`/condutor/${id}`);
  }

  async function createDriver<T>(params?: T) {
    return await api.post("/condutor", params);
  }

  return { getDriver, getDriverById, updateDriver, deleteDriver, createDriver };
};
