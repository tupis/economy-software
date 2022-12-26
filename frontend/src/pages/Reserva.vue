<template>
  <div>
    <ReservaInfo :reserva="reserva" />
  </div>
</template>

<script>
import ReservaInfo from "../components/ReservaInfo/ReservaInfo.vue";
import ReservaServices from "../services/reservaServices";
const { search } = ReservaServices;

export default {
  name: "Reserva",
  components: { ReservaInfo },
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
