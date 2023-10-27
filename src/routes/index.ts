import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "../views/Home.vue";
import FoodList from "../views/FoodList.vue";


interface Route {
    path: string,
    name: string,
    component: any

}

const routes: Array<Route> = [
    {
        path: '/',
        name: 'home',
        component: HomeVue
    },
    {
        path: '/menus/:id',
        name: 'menus',
        component: FoodList
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router