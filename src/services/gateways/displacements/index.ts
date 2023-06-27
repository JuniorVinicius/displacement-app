import { getAPI } from "@/services/api/baseUrl";

export const displacementGateway = () => {
  const api = getAPI();

  async function getDisplacement() {
    return api.get("/deslocamento");
  }

  async function getDisplacementById(id?: string) {
    return api.get(`/deslocamento/${id}`);
  }

  async function updateDisplacement<T>(
    id?: string,
    endDisplacement?: string,
    params?: T
  ) {
    return api.put(`/deslocamento/${id}/${endDisplacement}`, params);
  }

  async function deleteDisplacement(id: string) {
    return api.delete(`/deslocamento/${id}`, {
      data: {
        id,
      },
    });
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
