<template>
  <div>
    <div v-for="reserva in reservas" v-bind:key="reserva.id">
      <router-link :to="reserva.linkPath">
        <p>Status: {{ reserva.status }}</p>
        <p>Numero de reserva: {{ reserva.numeroreserva }}</p>
        <p>Numero de apartamento: {{ reserva.apartamento }}</p>
        <p>Data de checkin: {{ reserva.datacheckin }}</p>
        <p v-show="reserva.datacheckout">
          Data de checkout: {{ reserva.datacheckout }}
        </p>
      </router-link>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListReservas",
  props: {
    reservas: Array,
  },
};
</script>
