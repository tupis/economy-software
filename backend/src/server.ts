import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";
dotenv.config();

const app = express();
app.use(express.json());
const port = Number(process.env.PORT) || 5000;
app.use(router);

app.listen(port, () => console.log("server online at port " + port));
