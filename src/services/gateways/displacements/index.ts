import { getAPI } from "@/services/api/baseUrl";

export const displacementGateway = () => {
  const api = getAPI();

  async function getDisplacement() {
    return api.get("/condutor");
  }

  async function getDisplacementById(id?: string) {
    return api.get(`/condutor/${id}`);
  }

  async function updateDisplacement<T>(id?: string, params?: T) {
    return api.put(`/condutor/${id}`, params);
  }

  async function deleteDisplacement(id?: string, endDisplacement?: string) {
    return api.delete(`/condutor/${id}/${endDisplacement}`);
  }

  async function createDisplacement<T>(initDisplacement: string, params?: T) {
    return api.post(`/condutor/${initDisplacement}`, params);
  }

  return {
    getDisplacement,
    getDisplacementById,
    updateDisplacement,
    deleteDisplacement,
    createDisplacement,
  };
};
