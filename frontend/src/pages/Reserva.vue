<template>
  <div>
    <div>
      <p>Status: {{ reserva.status }}</p>
      <p>Numero de reserva: {{ reserva.numeroreserva }}</p>
      <p>Numero de apartamento: {{ reserva.apartamento }}</p>
      <p>Data de checkin: {{ reserva.datacheckin }}</p>
      <p v-show="reserva.datacheckout">
        Data de checkout: {{ reserva.datacheckout }}
      </p>
    </div>
  </div>
</template>

<script>
import ReservaServices from "../services/reservaServices";
const { search } = ReservaServices;

export default {
  name: "Reserva",
  data() {
    return {
      reserva: {},
    };
  },
  methods: {
    async getInfoReserva() {
      const data = await search(this.getURL());
      this.reserva = data;
    },
    getURL() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.getInfoReserva();
  },
};
</script>
