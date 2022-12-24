import express from "express";
import { HospedeController } from "../controllers/hospede";

const HospedeRouter = express.Router();

HospedeRouter.post("/cadastrarHospede", HospedeController.create);
HospedeRouter.put("/atualizarHospede", HospedeController.update);
HospedeRouter.get("/buscarHospede/", HospedeController.listAll);
HospedeRouter.get("/buscarHospede/:id", HospedeController.search);

export default HospedeRouter;
