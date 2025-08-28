<template>
    <q-table
        :rows-per-page-options="[12]"
        :rows="clientes"
        :columns="columns"
        @row-click="rowClick"
    />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClientesStore } from 'src/stores/cliente.store';
import { storeToRefs } from 'pinia';
import type Columns from 'src/models/Columns'
import type Cliente from 'src/models/Cliente';

const clienteStore = useClientesStore();
const { clientes } = storeToRefs(clienteStore);

const rowClick = async (evt: Event, row: Cliente) => {
  if (row.id) {
    await clienteStore.show(row.id)
  }
}

const columns = [
  {
    name: 'nome',
    label: 'Nome',
    align: 'left',
    field: 'nome',
    sortable: true
  },
  {
    name: 'email',
    label: 'Email',
    align: 'left',
    field: 'email',
    sortable: true
  },
  {
    name: 'telefone',
    label: 'Telefone',
    align: 'left',
    field: 'telefone',
    sortable: true
  },
  {
    name: 'documento',
    label: 'Documento',
    align: 'left',
    field: 'documento',
    sortable: true
  }
] as Columns[]

onMounted(async () => {
   await clienteStore.index();
})
</script>
