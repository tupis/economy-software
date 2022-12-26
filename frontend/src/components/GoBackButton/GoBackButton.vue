<template>
  <v-btn color="info" @click="goBack"> Voltar </v-btn>
</template>

<script>
import router from "../../router";

export default {
  name: "GoBackButton",
  methods: {
    goBack() {
      router.back();
    },
  },
};
</script>
