<template>
  <div>
    <h1>Informações Hotel:</h1>
    <p>Nome: {{ hotelInfo.nome }}</p>
    <p>CNPJ: {{ hotelInfo.cnpj }}</p>
    <p>País: {{ hotelInfo.pais }}</p>
    <p>Estado: {{ hotelInfo.estado }}</p>
    <p>Cidade: {{ hotelInfo.cidade }}</p>

    <h1>Reservas:</h1>

    <ListReservas :reservas="reservas" />
  </div>
</template>

<script>
import ListReservas from "../components/ListReservas/ListReservas.vue";
import HotelServices from "../services/hotelServices";
const { search } = HotelServices;

export default {
  name: "Hotel",
  components: {
    ListReservas,
  },
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
        linkEdit: `/reserva/edit/${reserva.id}`,
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
