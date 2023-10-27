<script setup lang="ts">
import { ref,computed } from 'vue';
import type { Ref } from 'vue';
import { TMenus } from '../services/TodoTypes';
import { RouterLink } from 'vue-router'
// import { Category,randomString } from '../services/service';

const props =defineProps<{
    dataMenu: TMenus[];
    success: boolean,
}>()

const menuInput: Ref<string> = ref('');

const categoryData = ref(props.dataMenu);
const handleSubmitCategory = () => {
    menuInput.value = '';
}


</script>

<template>
    <div class="p-5">
        <div class="flex flex-wrap flex-col">
            <h4>Add Menu</h4>
            <div>
                <input type="text" name="category" id="" v-model="menuInput" class="p-1 bg-slate-600 border-5 text-white" >
                <button 
                @click="()=>{
                    if(menuInput.length >1){  
                        $emit('submit-menu', menuInput);
                        handleSubmitCategory();
                    }
                    }"
                >➕</button>
            </div>
        </div>
        <div>
            <h4>Category List</h4>
            <ul>
                <li v-for="menu in dataMenu" :key="menu.uuid" class="flex flex-row justify-center mb-2" >
                    <div>
                        <i>➡️</i><RouterLink :to="`/menus/${menu.uuid}`" class="hover:cursor-pointer hover:text-red-200">{{ menu.name }}</RouterLink>
                    </div>
                    <div>
                        <a @click="$emit('delete-Menu', menu.uuid);
                            handleSubmitCategory();
                        " class="hover:cursor-pointer"><i>❎</i></a>
                    </div>
                
                </li>
            </ul>
        </div>
    </div>
</template>


