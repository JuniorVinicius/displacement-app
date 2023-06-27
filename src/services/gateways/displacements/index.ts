import { getAPI } from "@/services/api/baseUrl";

export const displacementGateway = () => {
  const api = getAPI();

  async function getDisplacement() {
    return api.get("/deslocamento");
  }

  async function getDisplacementById(id?: string) {
    return api.get(`/deslocamento/${id}`);
  }

  async function updateDisplacement<T>(id?: string, params?: T) {
    return api.put(`/deslocamento/${id}`, params);
  }

  async function deleteDisplacement(id?: string, endDisplacement?: string) {
    return api.delete(`/deslocamento/${id}/${endDisplacement}`);
  }

  async function createDisplacement<T>(params?: T) {
    return api.post(`/deslocamento/IniciarDeslocamento`, params);
  }

  return {
    getDisplacement,
    getDisplacementById,
    updateDisplacement,
    deleteDisplacement,
    createDisplacement,
  };
};
