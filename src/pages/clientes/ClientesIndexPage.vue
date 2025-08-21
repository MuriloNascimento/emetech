<template>
  <q-page class="row items-center justify-evenly">
    Clientes
    {{ loading }}
    {{ clientes }}
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClientesStore } from 'src/stores/cliente.store';
import { storeToRefs } from 'pinia';

const clienteStore = useClientesStore();
const { clientes, loading } = storeToRefs(clienteStore);

onMounted(async () => {
   await clienteStore.index();
})
</script>
