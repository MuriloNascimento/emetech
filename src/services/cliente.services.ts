import  api from './api';
import type Cliente from 'src/models/Cliente';

export const clientesService = {
  index: () => api.get<Cliente[]>('/clientes'),
  show: (id: number) => api.get<Cliente>(`/clientes/${id}`),
  create: (payload: Cliente) => api.post('/clientes', payload),
  update: (id: number, payload: Cliente) => api.put(`/clientes/${id}`, payload),
  destroy: (id: number) => api.delete(`/clientes/${id}`)
};