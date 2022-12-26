<template>
  <div>
    <v-card width="400" class="card">
      <v-card-item>
        <v-card-title>{{ hotelInfo.nome }}</v-card-title>
        <v-card-subtitle>CNPJ: {{ hotelInfo.cnpj }}</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <p>País: {{ hotelInfo.pais }}</p>
        <p>Estado: {{ hotelInfo.estado }}</p>
        <p>
          Cidade:
          {{ hotelInfo.cidade }}
        </p>
      </v-card-text>
    </v-card>

    <div class="create-reserva">
      <v-btn variant="flat" color="info"
        ><router-link :to="linkCreateReserva">Criar reserva</router-link></v-btn
      >

      <GoBackButton />
    </div>

    <ListReservas :reservas="reservas" />
  </div>
</template>

<script>
import GoBackButton from "../components/GoBackButton/GoBackButton.vue";
import ListReservas from "../components/ListReservas/ListReservas.vue";
import HotelServices from "../services/hotelServices";
const { search } = HotelServices;

export default {
  name: "Hotel",
  components: {
    ListReservas,
    GoBackButton,
  },
  data() {
    return {
      hotelInfo: {},
      reservas: [],
      linkCreateReserva: "",
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
    createReservaLink() {
      const link = `/hotel/${this.getURL()}/reserva/create`;
      this.linkCreateReserva = link;
    },
  },
  mounted() {
    this.getInfoHotel();
    this.createReservaLink();
  },
};
</script>

<style scoped>
.card {
  margin: auto;
}
.create-reserva {
  margin: 20px auto;
  width: fit-content;
}
.create-reserva a {
  margin: auto;
  color: white;
  text-decoration: none;
}
.create-reserva button {
  margin: 0 5px;
}
</style>
