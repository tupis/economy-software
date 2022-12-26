import { createRouter, createWebHistory } from "vue-router";

import Hotel from "../pages/Hotel.vue";
import CreateHotel from "../pages/CreateHotel.vue";
import EditHotel from "../pages/EditHotel.vue";
// import CreateReserva from "../pages/CreateReserva.vue";
// import EditReserva from "../pages/EditReserva.vue";
import Reserva from "../pages/Reserva.vue";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", component: Home },

  { path: "/hotel/:id", component: Hotel },
  { path: "/hotel/create", component: CreateHotel },
  { path: "/hotel/edit/:id", component: EditHotel },

  { path: "/reserva/:id", component: Reserva },
  // { path: "/reserva/create", component: CreateReserva },
  // { path: "/reserva/edit/:id", component: EditReserva },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
