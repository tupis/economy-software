<template>
  <div>
    <div v-for="hotel in hotels" v-bind:key="hotel.id">
      <router-link :to="hotel.linkPath"
        ><p>{{ hotel.nome }}</p></router-link
      >
    </div>
  </div>
</template>

<script>
import HotelServices from "../services/hotelServices";
const { listAll } = HotelServices;

export default {
  name: "ListHotel",
  data() {
    return {
      hotels: [],
    };
  },
  methods: {
    async getListHotel() {
      const data = await listAll();
      this.hotels = data.map((hotel) => ({
        ...hotel,
        linkPath: `/hotel/${hotel.id}`,
      }));
    },
  },
  mounted() {
    this.getListHotel();
  },
};
</script>
