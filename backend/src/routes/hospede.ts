import express from "express";
import { HospedeController } from "../controllers/hospede";
const { create, listAll, search, update } = HospedeController;

const HospedeRouter = express.Router();

HospedeRouter.post("/cadastrarHospede", create);
HospedeRouter.put("/atualizarHospede", update);
HospedeRouter.get("/buscarHospede/", listAll);
HospedeRouter.get("/buscarHospede/:id", search);

export default HospedeRouter;
