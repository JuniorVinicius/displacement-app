import { getAPI } from "@/services/api/baseUrl";

export const vehicleGateway = () => {
  const api = getAPI();

  async function getVehicle() {
    return api.get("/veiculo");
  }

  async function getVehicleById(id?: string) {
    return api.get(`/veiculo/${id}`);
  }

  async function updateVehicle<T>(id?: string, params?: T) {
    return api.put(`/veiculo/${id}`, params);
  }

  async function deleteVehicle(id?: string) {
    return api.delete(`/veiculo/${id}`);
  }

  async function createVehicle<T>(params?: T) {
    return api.post("/veiculo", params);
  }

  return { getVehicle, getVehicleById, updateVehicle, deleteVehicle, createVehicle };
};
