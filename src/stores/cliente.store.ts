import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cliente from 'src/models/Cliente';

export const useClientesStore = defineStore('clienteStore', () => {
  // --- STATE ---
  const clientes = ref<Cliente[]>([]);
  const loading = ref(false);

  // --- ACTIONS ---
  async function index() {
    loading.value = true;
    try {
      clientes.value = await Cliente.index();
    } finally {
      loading.value = false;
    }
  }

  // --- RETURN (exposição do store) ---
  return {
    clientes,
    loading,
    index,
  };
});
