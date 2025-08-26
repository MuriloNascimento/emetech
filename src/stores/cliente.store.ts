import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cliente from 'src/models/Cliente';

export const useClientesStore = defineStore('clienteStore', () => {
  // --- STATE ---
  const cliente = ref<Cliente>({} as Cliente);
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

  async function new() {
    try {
      cliente.value = await Cliente.new();
    } finally {
      loading.value = false;
    }
  }

  async function show(id:number) {
    try {
      cliente.value = await Cliente.show(id);
    } finally {
      loading.value = false;
    }
  }

  // --- RETURN (exposição do store) ---
  return {
    clientes,
    cliente,
    loading,
    index,
  };
});
