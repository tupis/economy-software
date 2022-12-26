<template>
  <div>
    <button>
      <router-link to="/hotel/create/">Cadastrar hotel</router-link>
    </button>
    <ListHotel :hotels="hotels" />
  </div>
</template>

<script>
import ListHotel from "../components/ListHotel/ListHotel.vue";
import HotelServices from "../services/hotelServices";
const { listAll } = HotelServices;

export default {
  name: "Home",
  components: {
    ListHotel,
  },
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
        linkEdit: `/hotel/edit/${hotel.id}`,
      }));
    },
  },
  mounted() {
    this.getListHotel();
  },
};
</script>
