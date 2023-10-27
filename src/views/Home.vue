<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import Form from '../components/FormComponent.vue';
import TableComponent from '../components/TableComponent.vue';
import CategoryComponent from '../components/CategoryComponent.vue';
import { TMenus, TFood } from '../services/TodoTypes';
import { Category, films } from '../services/service';
import { useFetch } from '../services/fetch';
import { v4 as uuidv4  } from 'uuid';
import axios from 'axios';

// type Route = "table" | "form" | "detail" | "category" | "categorydetail";


const randomString = Math.random().toString(36).substring(2);
const success = ref<boolean>(false);
// const selectedCategory = ref<TDataFilms | null>();
// const selectedCategoryArray = ref<Array<TDataFilms> | null>();
const selectedIdCategory = ref<string | null>();
// const route: Ref<Route> = ref('category');
const dataMenu  = ref<TMenus[]>([]);
const errorMenu: Ref<any> = ref();
const uuidGenerator = uuidv4();
const getData = async () => {
  try {
    const { data } = await axios.get('http://192.168.15.202:3000/menu');
    // console.log(data.data)
    dataMenu.value = data.data ;
  } catch (error) {
    errorMenu.value = error;
  }
}
getData()

console.log(dataMenu.value)

const handleSubmitMenu = async (categoryInput: string) => {
  try {
    const { data } = await axios.post('http://192.168.15.202:3000/menu/create', {
                        uuid: uuidGenerator,
                        name: categoryInput
                    }, {
                      headers: {
                        'Content-Type': 'application/json'
                      }
    });
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  getData()
}

const handleDetailCategory = (id: string):void => {
}
const handleDeleteMenu = async (id: string) => {
  try {
    const { data } = await axios.delete(`http://192.168.15.202:3000/menu/delete/${id}`)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  getData()
}

</script>

<template>
  <div class="min-h-screen w-full " >
    <!-- <pre>{{ dataMenu }}</pre> -->
    <div class="flex place-content-center flex-col">
      <CategoryComponent
      :success="success"
      :dataMenu="dataMenu"
      @detail-category="handleDetailCategory"
      @submit-menu="handleSubmitMenu"
      @delete-Menu="handleDeleteMenu"
      />
      <button>🔙</button>
    </div>
    
  </div>
</template>


