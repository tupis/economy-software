import { createRouter, createWebHistory } from "vue-router";

import Hotel from "../pages/Hotel.vue";
import Reserva from "../pages/Reserva.vue";
import ListHotel from "../pages/ListHotel.vue";

const routes = [
  { path: "/", component: ListHotel },
  { path: "/hotel/create", component: Hotel },

  { path: "/hotel/:id", component: Hotel },
  { path: "/hotel/edit/:id", component: Hotel },

  { path: "/reserva/:id", component: Reserva },
  { path: "/reserva/create", component: Hotel },
  { path: "/reserva/edit/:id", component: Hotel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
