<template>
  <div class="container">
    <v-alert type="success" v-show="sucess">Cadastrado com sucesso</v-alert>

    <v-alert type="warning" v-show="error">Erro ao cadastrar hotel</v-alert>

    <v-form ref="form">
      <v-text-field v-model="nome" label="Nome" required></v-text-field>

      <v-text-field v-model="cnpj" label="CNPJ" required></v-text-field>

      <v-text-field v-model="pais" label="País" required></v-text-field>

      <v-text-field v-model="estado" label="Estado" required></v-text-field>

      <v-text-field v-model="cidade" label="Cidade" required></v-text-field>

      <div class="wrapper-buttons">
        <v-btn color="success" @click="submit"> Cadastrar </v-btn>

        <GoBackButton />
      </div>
    </v-form>
  </div>
</template>

<script>
import HotelServices from "../services/hotelServices";
import router from "../router";
import GoBackButton from "../components/GoBackButton/GoBackButton.vue";
const { create } = HotelServices;

export default {
  components: { GoBackButton },
  data: () => ({
    nome: "",
    cnpj: "",
    pais: "",
    estado: "",
    cidade: "",
    sucess: false,
    error: false,
  }),
  methods: {
    async submit() {
      const params = {
        nome: this.nome,
        cnpj: this.cnpj,
        pais: this.pais,
        estado: this.estado,
        cidade: this.cidade,
      };
      const data = await create(params);
      this.setMessage("sucess");
    },
    getIdHotel() {
      return this.$route.params.id;
    },
    async getInfoHotel() {
      const data = await search(Number(this.getIdHotel()));
      this.nome = data.nome;
      this.cnpj = data.cnpj;
      this.pais = data.pais;
      this.estado = data.estado;
      this.cidade = data.cidade;
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
  },
  mounted() {
    this.getInfoHotel();
  },
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
</style>
