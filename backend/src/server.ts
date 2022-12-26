import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = Number(process.env.PORT) || 5000;
app.use(router);
//TODO: validar cnpj

app.listen(port, () => console.log("server online at port " + port));
