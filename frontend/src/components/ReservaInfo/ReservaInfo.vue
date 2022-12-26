<template>
  <div class="container">
    <v-card width="400" class="card">
      <v-card-item>
        <v-card-title
          >Numero de reserva: {{ reserva.numeroreserva }}</v-card-title
        >
        <v-card-subtitle
          >Numero de apartamento: {{ reserva.apartamento }}</v-card-subtitle
        >
      </v-card-item>

      <v-card-text>
        <p>Status: {{ reserva.status }}</p>
        <p>Data de checkin: {{ reserva.datacheckin }}</p>
        <p v-show="reserva.datacheckout">
          Data de checkout: {{ reserva.datacheckout }}
        </p>
      </v-card-text>
    </v-card>

    <div class="create-reserva">
      <GoBackButton />
    </div>

    <div>
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Sobrenome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hospede in reserva.hospedes" v-bind:key="hospede.id">
            <td>{{ hospede.nome }}</td>
            <td>{{ hospede.sobrenome }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import GoBackButton from "../GoBackButton/GoBackButton.vue";

class Reserva {
  constructor(
    id,
    idhotel,
    numeroreserva,
    apartamento,
    datacheckin,
    datacheckout,
    status,
    hospedes,
    linkEdit
  ) {
    this.status = status;
    this.numeroreserva = numeroreserva;
    this.datacheckin = datacheckin;
    this.datacheckout = datacheckout;
    this.apartamento = apartamento;
    this.id = id;
    this.idhotel = idhotel;
    this.hospedes = hospedes;
    this.linkEdit = linkEdit;
  }
}

export default {
  name: "ReservaInfo",
  props: {
    reserva: new Reserva(),
  },
  components: { GoBackButton },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

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
