<template>
  <div>
    <h1>Informações Hotel:</h1>
    <p>Nome: {{ hotelInfo.nome }}</p>
    <p>CNPJ: {{ hotelInfo.cnpj }}</p>
    <p>País: {{ hotelInfo.pais }}</p>
    <p>Estado: {{ hotelInfo.estado }}</p>
    <p>Cidade: {{ hotelInfo.cidade }}</p>

    <h1>Reservas:</h1>

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
import HotelServices from "../services/hotelServices";
const { search } = HotelServices;

export default {
  name: "Hotel",
  data() {
    return {
      hotelInfo: {},
      reservas: [],
    };
  },
  methods: {
    async getInfoHotel() {
      const data = await search(this.getURL());
      this.hotelInfo = data;

      this.getListReservas(data.reservas);
    },
    getListReservas(reservas) {
      const linkPath = reservas.map((reserva) => ({
        ...reserva,
        linkPath: `/reserva/${reserva.id}`,
      }));
      this.reservas = linkPath;
    },
    getURL() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.getInfoHotel();
  },
};
</script>
