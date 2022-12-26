<template>
  <div>
    <ReservaInfo :reserva="reserva" />
    <button @click="goBack()">voltar</button>
  </div>
</template>

<script>
import ReservaInfo from "../components/ReservaInfo/ReservaInfo.vue";
import ReservaServices from "../services/reservaServices";
import router from "../router/index";
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
    goBack() {
      router.go(-1);
    },
  },
  mounted() {
    this.getInfoReserva();
  },
};
</script>
