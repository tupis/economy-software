import api from "./base.js";

const ReservaServices = {
  listAll: async () => {
    const response = api
      .get("/buscarReservaHospede")
      .then((res) => res.data)
      .catch((res) => res);

    return response;
  },
  search: async (id) => {
    const response = await api
      .get(`/buscarReservaHospede/${id}`)
      .then((res) => res.data)
      .catch((res) => res);
    return response;
  },
  create: async (params) => {
    const response = await api
      .post("/cadastrarReservaHospede", params)
      .then((res) => res.data)
      .catch((res) => res);
    return response;
  },
  update: async (id, params) => {
    const response = await api
      .put(`/atualizarReservaHospede/${id}`, params)
      .then((res) => res.data)
      .catch((res) => res);
    return response;
  },
};

export default ReservaServices;
