import { getAPI } from "@/services/api/baseUrl";

export const clientGateway = () => {
  const api = getAPI();

  async function getClient() {
    return api.get("/client");
  }

  async function getClientById(id?: string) {
    return api.get(`/client/${id}`);
  }

  async function updateClient<T>(id?: string, params?: T) {
    return api.put(`/client/${id}`, params);
  }

  async function deleteClient(id?: string) {
    return api.delete(`/client/${id}`);
  }

  async function createClient<T>(params?: T) {
    return api.post("/client", params);
  }
  
  return { getClient, getClientById, updateClient, deleteClient, createClient };
};
