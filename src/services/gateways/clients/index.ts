import { getAPI } from "@/services/api/baseUrl";

export const clientGateway = () => {
  const api = getAPI();

  async function getClient() {
    return await api.get("/cliente");
  }

  async function getClientById(id?: string) {
    return await api.get(`/cliente/${id}`);
  }

  async function updateClient<T>(id?: string, params?: T) {
    return await api.put(`/cliente/${id}`, params);
  }

  async function deleteClient(id?: string) {
    return await api.delete(`/cliente/${id}`);
  }

  async function createClient<T>(params?: T) {
    return await api.post("/cliente", params);
  }
  
  return { getClient, getClientById, updateClient, deleteClient, createClient };
};
