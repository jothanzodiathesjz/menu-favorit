<template>

        <!-- <h1>{{ router.params.id}}</h1> -->
    
    <div class="flex flex-row justify-center gap-20">
        <TableComponent/>
        <FormComponent/>
        
        <!-- <div >
            <span>Belum ada data</span>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import TableComponent from '../components/TableComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import { useRoute } from 'vue-router';

const router = useRoute()


</script>
