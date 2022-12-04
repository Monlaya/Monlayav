import { createRouter, createWebHistory, routerKey } from "vue-router";
import Home from "../pages/Home.vue"

const routes = [{
    path: "/",
    Component: Home,
    name: "Home",
}]

 const rputer = cretaeRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savePosition){
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 }; //Go to the top of the page if no hash
    },
    routes,
 });

 export default router;