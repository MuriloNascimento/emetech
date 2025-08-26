<template>
  <q-page>
    <div class="row q-pa-sm">
      <div class="col-md-8 q-pa-sm">
        <q-table
          :loading="loading"
          title="Lista de clientes"
          :rows="clientes"
          :columns="columns"
          row-key="name"
        />
      </div>
      <div class="col-md-4 q-pa-sm">
        <q-input label="Nome" v-model="cliente.nome" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClientesStore } from 'src/stores/cliente.store';
import { storeToRefs } from 'pinia';
import type Columns from 'src/models/Columns'

const clienteStore = useClientesStore();
const { clientes, loading, cliente } = storeToRefs(clienteStore);

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
