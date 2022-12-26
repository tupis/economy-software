import express from "express";
import { ReservaController } from "../controllers/reserva";
const { create, listAll, search, update } = ReservaController;

const ReservaRouter = express.Router();

ReservaRouter.post("/cadastrarReservaHospede", create);
ReservaRouter.get("/buscarReservaHospede", listAll);
ReservaRouter.put("/atualizarReservaHospede/:id", update);
ReservaRouter.get("/buscarReservaHospede/:id", search);

export default ReservaRouter;
