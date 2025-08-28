<template>
    <q-form>
        <q-card>
            <q-card-section>
                <q-input dense outlined label="Nome" type="text" v-model="cliente.nome" class="q-mb-sm"/>
                <q-input dense outlined label="Email" type="text" v-model="cliente.email" class="q-mb-sm"/>
                <q-input dense outlined label="Telefone" type="text" v-model="cliente.telefone" class="q-mb-sm"/>
                <q-input dense outlined label="Documento" type="text" v-model="cliente.documento" class="q-mb-sm"/>
            </q-card-section>
            <q-card-section>
                <q-btn class="full-width q-mb-sm" unelevated color="primary" label="Salvar" @click="clienteStore.save" />
                <q-btn class="full-width q-mb-sm" unelevated outline color="negative" label="Cancelar" @click="clienteStore._new" />
                <q-btn class="full-width" unelevated color="negative" label="Remover" @click="clienteStore.destroy" />
            </q-card-section>
        </q-card>
    </q-form>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClientesStore } from 'src/stores/cliente.store';
import { storeToRefs } from 'pinia';

const clienteStore = useClientesStore();
const { cliente } = storeToRefs(clienteStore);

onMounted(() => {
   clienteStore._new();
})
</script>
