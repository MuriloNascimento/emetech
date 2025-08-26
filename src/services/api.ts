import axios from 'axios';
//import { Cookies } from 'quasar';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da sua API
  timeout: 10000, // tempo máximo para resposta
});

// Interceptador para enviar token automaticamente
/*
api.interceptors.request.use((config) => {
  const token = Cookies.get('auth_token'); // ou localStorage/sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptador para tratar erros globais
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aqui você pode usar Notify do Quasar, redirecionar, etc.
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);
*/
export default api;
