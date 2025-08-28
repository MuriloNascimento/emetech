<template>
  <q-page class="bg-grey-2">
    <div class="row q-pa-sm">
      <div class="col-md-12 q-pa-sm">
        <span class="text-h6">Clientes</span>
      </div>
      <div class="col-md-8 col-sm-12 col-xs-12 q-pa-sm">
        <clientes-table />
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 q-pa-sm">
        <clientes-form />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ClientesTable from 'src/components/tables/ClientesTable.vue';
import ClientesForm from 'src/components/form/ClientesForm.vue';
</script>
