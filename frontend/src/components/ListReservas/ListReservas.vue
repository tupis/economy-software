<template>
  <div class="container">
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-left">Número de reserva</th>
          <th class="text-left">Número de apartamento</th>
          <th class="text-left">Status</th>
          <th class="text-left">Data de checkin</th>
          <th class="text-left">Data de checkout</th>
          <th class="text-left">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" v-bind:key="reserva.id">
          <td>{{ reserva.numeroreserva }}</td>
          <td>{{ reserva.apartamento }}</td>
          <td>{{ reserva.status }}</td>
          <td>{{ reserva.datacheckin }}</td>
          <td v-if="reserva.datacheckout">{{ reserva.datacheckout }}</td>
          <td v-else>Ainda não registrado</td>
          <td>
            <button>
              <router-link :to="reserva.linkEdit"
                ><v-icon icon="mdi-pencil"></v-icon
              ></router-link>
            </button>
            <button>
              <router-link :to="reserva.linkPath"
                ><v-icon icon="mdi-eye"></v-icon
              ></router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
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

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

a {
  text-decoration: none;
  color: black;
}

a i {
  margin: 0 2px;
}
</style>
