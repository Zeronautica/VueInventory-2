import { createRouter, createWebHistory } from "vue-router";
import Overview from "../views/Overview.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Order from "../views/Order.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "overview",
      component: Overview,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
    },
  ],
});

export default router;
