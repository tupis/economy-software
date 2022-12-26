<template>
  <div class="container">
    <v-alert type="success" v-show="sucess">Cadastrado com sucesso</v-alert>

    <v-alert type="warning" v-show="error">Erro ao cadastrar hotel</v-alert>

    <v-form ref="form">
      <v-text-field
        v-model="numeroreserva"
        label="Número da reserva"
        required
      ></v-text-field>

      <v-text-field
        v-model="apartamento"
        label="Número do apartamentoo"
        required
      ></v-text-field>

      <v-text-field
        v-model="datacheckin"
        label="Data de Checkin"
        required
      ></v-text-field>

      <v-text-field
        v-model="datacheckout"
        label="Data de checkout"
      ></v-text-field>

      <v-text-field v-model="status" label="Status" required></v-text-field>

      <v-btn @click="addMoreHospede($event)" color="info"
        >Adicionar mais um hóspede</v-btn
      >
      <div v-for="(hospede, index) in hospedes" v-bind:key="index">
        <h3>Hospede:</h3>
        <div class="wrapper-name">
          <v-text-field
            v-model="hospede.nome"
            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            v-model="hospede.sobrenome"
            label="Sobrenome"
            required
          ></v-text-field>
          <v-btn
            variant="flat"
            color="error"
            @click="deleteHospede(index)"
            class="delete-button"
            >Excluir</v-btn
          >
        </div>
      </div>

      <div class="wrapper-buttons">
        <v-btn color="success" @click="submit"> Cadastrar </v-btn>

        <GoBackButton />
      </div>
    </v-form>
  </div>
</template>

<script>
import ReservaServices from "../services/reservaServices";
import router from "../router";
import GoBackButton from "../components/GoBackButton/GoBackButton.vue";
const { create } = ReservaServices;

export default {
  components: { GoBackButton },
  data: () => ({
    numeroreserva: "",
    apartamento: "",
    datacheckin: "",
    datacheckout: "",
    status: "",
    hospedes: [
      {
        nome: "",
        sobrenome: "",
      },
    ],
    sucess: false,
    error: false,
  }),
  methods: {
    async submit() {
      const params = {
        idhotel: Number(this.getIdHotel()),
        numeroreserva: this.numeroreserva,
        apartamento: this.apartamento,
        datacheckin: this.datacheckin,
        datacheckout: this.datacheckout,
        status: Number(this.status),
        hospedes: this.hospedes,
      };
      console.log(params);
      const data = await create(params);
      console.log(data);
      this.setMessage("sucess");
    },
    getIdHotel() {
      return this.$route.params.id;
    },
    goBack() {
      router.back();
    },
    setMessage(value) {
      if (value === "sucess") {
        this.sucess = true;
        setTimeout(() => {
          this.sucess = false;
        }, 2000);
      } else if (value === "error") {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    },
    addMoreHospede(e) {
      e.preventDefault();

      this.hospedes.push({
        nome: "",
        sobrenome: "",
      });
    },
    deleteHospede(index) {
      this.hospedes.splice(index, 1);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}

.wrapper-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper-name {
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-button {
  margin: 0 10px;
}
</style>
