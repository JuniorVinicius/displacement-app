import { getAPI } from "@/services/api/baseUrl";

export const vehicleGateway = () => {
  const api = getAPI();

  async function getVehicle() {
    return await api.get("/veiculo");
  }

  async function getVehicleById(id?: string) {
    return await api.get(`/veiculo/${id}`);
  }

  async function updateVehicle<T>(id?: string, params?: T) {
    return await api.put(`/veiculo/${id}`, params);
  }

  async function deleteVehicle(id?: string) {
    return await api.delete(`/veiculo/${id}`);
  }

  async function createVehicle<T>(params?: T) {
    return await api.post("/veiculo", params);
  }

  return { getVehicle, getVehicleById, updateVehicle, deleteVehicle, createVehicle };
};
