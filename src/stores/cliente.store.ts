import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cliente from 'src/models/Cliente';

export const useClientesStore = defineStore('clienteStore', () => {
  // --- STATE ---
  const cliente = ref<Cliente>({} as Cliente);
  const clientes = ref<Cliente[]>([]);

  // --- ACTIONS ---
  async function index() {
    clientes.value = await Cliente.index();
  }

  function _new() {
    cliente.value = new Cliente();
  }

  async function save() {
    cliente.value = await cliente.value.save();
    await index();
  }

  async function destroy() {
    await cliente.value.destroy();
    _new();
    await index();
  }

  async function show(id:number) {
    cliente.value = await Cliente.show(id);
  }

  // --- RETURN (exposição do store) ---
  return {
    clientes,
    cliente,
    destroy,
    show,
    _new,
    save,
    index,
  };
});
