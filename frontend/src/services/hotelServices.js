import api from "./base.js";

const HotelServices = {
  listAll: async () => {
    const response = api
      .get("/buscarHotel")
      .then((res) => res.data)
      .catch((res) => res);

    return response;
  },
  search: async (id) => {
    const response = await api
      .get(`/buscarHotel/${id}`)
      .then((res) => res.data)
      .catch((res) => res);
    return response;
  },
  create: async (params) => {
    const response = await api
      .post("/cadastrarHotel", params)
      .then((res) => res.data);
    return response;
  },
  update: async (id, params) => {
    const response = await api
      .update(`/atualizarHotel/${id}`, params)
      .catch((res) => res);
    return response;
  },
};

export default HotelServices;
